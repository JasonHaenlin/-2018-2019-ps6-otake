const { Supervisor } = require('../../middlewares/orm');
const { Mail } = require('../../middlewares/schema');
const { ValidationError } = require('../../utils/errors');
const Joi = require('@hapi/joi');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.PULSE_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.PULSE_USER,
    pass: process.env.PULSE_PSWD
  }
});

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
    email.firstName = email.firstName || '';
    email.emailSender = email.emailSender || 'polytech RI';
    return transporter.sendMail({
      from: '"polytech RI" <contact@otakedev.com>',
      // mock to avoid flooding others
      to: 'jh.notif@gmail.com',
      subject: `polytech RI : ${email.object} -- ${email.firstName} ${email.lastName}`,
      text: `${email.firstName} ${email.lastName} \n${email.emailSender} \n\n${email.message}`
    });
  }
};
