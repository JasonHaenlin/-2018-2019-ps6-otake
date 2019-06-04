const resHandler = require('../../utils/response-handler');
const { student } = require('../../controller/queue');


exports.newStudent = async (req, res) => {
  const s = await student.insertStudent(req.body);
  resHandler.yahResponse(res, s);
};
