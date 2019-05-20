const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  firstName: Joi.string(),
  lastName: Joi.string(),
  emailSender: Joi.string().email({ minDomainSegments: 2 }),
  emailReceiver: Joi.array().items(Joi.string().email({ minDomainSegments: 2 }).required()).required(),
  object: Joi.string().required(),
  message: Joi.string().required()
});
