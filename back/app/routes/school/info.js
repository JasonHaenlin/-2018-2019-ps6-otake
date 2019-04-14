const resHandler = require('../../utils/response-handler');
const { info } = require('../../controller/school');

// using the database
exports.getDeadlineByYears = async (req, res) => {
  const years = req.params.intervalDate.split('-');
  const deadlines = await info.getDeadlineByYears(years[0], years[1]);
  resHandler.yahResponse(res, deadlines);
};
