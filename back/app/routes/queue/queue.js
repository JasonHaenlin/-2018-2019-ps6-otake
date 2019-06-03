const resHandler = require('../../utils/response-handler');
const { queue } = require('../../controller/queue');

// using the database
exports.getTickets = async (req, res) => {
  const tickets = await queue.getQueue(req.params.uuid, req.params.room);
  resHandler.yahResponse(res, tickets);
};

exports.postTickets = async (req, res) => {
  const tickets = await queue.insertTicketsInQueue(body.tickets);
  resHandler.yahResponse(res, tickets);
};
