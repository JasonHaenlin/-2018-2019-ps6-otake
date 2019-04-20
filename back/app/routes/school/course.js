const resHandler = require('../../utils/response-handler');
const { course } = require('../../controller/school');

// using the database
exports.getCourses = async (req, res) => {
  const courses = await course.getCourses();
  resHandler.yahResponse(res, courses);
};

exports.getCoursesOf = async (req, res) => {
  const courses = await course.getCoursesOf(req.params.major);
  resHandler.yahResponse(res, courses);
};

exports.getCoursesOfMajorForThisSemester = async (req, res) => {
  const courses = await course.getCoursesOfMajorForThisSemester(req.params.major, req.params.semester);
  resHandler.yahResponse(res, courses);
};
