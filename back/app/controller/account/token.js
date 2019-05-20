const { Token } = require('../../middlewares/orm');
const { ValidationError } = require('../../utils/errors');
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

const date = () => {
  const timestamp = Date.now() + (3600000 * 24 * 30);
  return new Date(timestamp).toJSON();
};

module.exports = {
  async createTokens(nb) {
    const tokens = [];
    for (let i = 0; i < nb; i++) {
      const t = await token.randomBytesAsync();
      tokens.push(createToken(t, date()));
    }
    return tokens;
  },

  insertTokens(nb) {
    return this.createTokens(nb).then((tokens) => {
      if (process.env.NODE_ENV === 'development') {
        return tokens.reduce(async (previousPromise, nextValue) => {
          await previousPromise;
          return Token.query().insert(nextValue);
        }, Promise.resolve());
      }
      // postgresql can handle array insert
      return Token.query().insert(tokens);
    });
  },

  submitNewTestimonialsForm(emails) {
    const { error } = Joi.validate(emails, emailSchema);
    if (error) {
      throw new ValidationError('Mails does not match schema', error);
    }
    return this.insertTokens(emails.length);
  }

};
