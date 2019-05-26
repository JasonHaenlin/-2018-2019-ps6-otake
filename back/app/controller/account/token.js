const { Token } = require('../../middlewares/orm');
const { ValidationError } = require('../../utils/errors');
const { supervisor } = require('../school');
const token = require('../../utils/crypt');
const Joi = require('@hapi/joi');

const emailSchema = Joi.array()
  .items(Joi.string()
    .email({ minDomainSegments: 2 }).required())
  .required();

const createToken = (token, time) => ({
  token: token,
  expires_at: time
});

const emailToJson = (email, token) => ({
  emailReceiver: [email],
  object: 'Donnez votre avis',
  message: 'Vous pouvez partager votre avis grâce à ce formulaire\n' +
    'https://ps.otakedev.com/testimonials/form/' + token.token + ''
});

const date = () => {
  const timestamp = Date.now() + (3600000 * 24 * 30);
  return new Date(timestamp).toJSON();
};

const createTokens = async (nb) => {
  const tokens = [];
  for (let i = 0; i < nb; i++) {
    const t = await token.randomBytesAsync();
    tokens.push(createToken(t, date()));
  }
  return tokens;
};

const insertTokens = (tokens) => {
  if (process.env.NODE_ENV === 'development') {
    return tokens.reduce(async (previousPromise, nextValue) => {
      await previousPromise;
      return Token.query().insert(nextValue);
    }, Promise.resolve());
  }
  // postgresql can handle array insert
  return Token.query().insert(tokens);
};

const getToken = (token) => {
  return Token.query()
    .where({ token: token })
    .andWhere({ status: 'pending' })
    .first();
};

const patchToken = (id, status) => {
  return Token.query()
    .patchAndFetchById(id, { status: status });
};

const isValid = async (res) => {
  if (!res) {
    return false;
  }
  const expDate = new Date(res.expires_at);
  const curDate = new Date();
  if (expDate.getTime() < curDate.getTime()) {
    await patchToken(res.id, 'blocked');
    return false;
  }
  return true;
};

const sendMails = (emails, tokens) => {
  emails.reduce(async (previousPromise, nextEmail) => {
    await previousPromise;
    return supervisor.sendMail(emailToJson(nextEmail, tokens.pop()));
  }, Promise.resolve());
};

module.exports = {

  async blockToken(token) {
    await patchToken(token.id, 'completed');
  },

  async submitNewTestimonialsForm(emails) {
    const { error } = Joi.validate(emails, emailSchema);
    if (error) {
      throw new ValidationError(`Emails does not match schema ${emails}`, error);
    }
    const tokens = await createTokens(emails.length);
    await insertTokens(tokens);
    return sendMails(emails, tokens);
  },

  checkTokenValidy(token) {
    return getToken(token)
      .then((res) => {
        if (isValid(res)) {
          return res;
        }
        return null;
      });
  }

};
