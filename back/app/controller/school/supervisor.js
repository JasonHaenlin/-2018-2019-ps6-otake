const { Supervisor } = require('../../middlewares/orm');
const { Mail } = require('../../middlewares/schema');
const { ValidationError } = require('../../utils/errors');
const transporter = require('../../config/mailer');
const Joi = require('@hapi/joi');


module.exports = {
  getSupervisors() {
    return Supervisor.query();
  },
  getSupervisorByCategory(category) {
    return Supervisor.query().where({ 'supervisor.category': category });
  },
  sendMail(email) {
    const { error } = Joi.validate(email, Mail);
    if (error) {
      throw new ValidationError(`Create Error : Object ${JSON.stringify(email)} does not match schema \n`, error);
    }
    email.firstName = email.firstName || '';
    email.lastName = email.lastName || '';
    email.emailSender = email.emailSender || 'polytech RI';

    return transporter.sendMail({
      from: '"polytech RI" <contact@otakedev.com>',
      // mocked to avoid flooding others
      to: 'jh.notif@gmail.com',
      subject: `polytech RI : ${email.object} -- ${email.firstName} ${email.lastName}`,
      text: `${email.firstName} ${email.lastName} \n${email.emailSender} \n\n${email.message}`
    });
  }
};
