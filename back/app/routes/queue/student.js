const resHandler = require('../../utils/response-handler');
const { student } = require('../../controller/queue');
const { AccessDeniedError } = require('../../utils/errors');


exports.newStudent = async (req, res) => {
  const s = await student.insertStudent(req.body);
  resHandler.yahResponse(res, s);
};

exports.checkStudent = async (req, res) => {
  const s = await student.getStudent(req.params.uuid);
  if (!s) {
    throw new AccessDeniedError('student id not valid');
  }
  resHandler.yahResponse(res, s);
};
