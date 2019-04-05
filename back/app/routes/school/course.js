const resHandler = require('../../utils/response-handler');
const { course } = require('../../controller/school');

// using the database
exports.getCourses = async (req, res) => {
  const courses = await course.getCourses();
  resHandler.yahResponse(res, courses);
};
