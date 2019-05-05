const { Supervisor } = require('../../middlewares/orm');
const nodemailer = require("nodemailer");

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
  getSupervisorByCategory(category){
    return Supervisor.query().where({'supervisor.category': category});
  },
  sendMail(){

  }
};
