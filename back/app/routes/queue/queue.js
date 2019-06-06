const resHandler = require('../../utils/response-handler');
const { queue, student } = require('../../controller/queue');
const { AccessDeniedError } = require('../../utils/errors');

// using the database
exports.getTickets = async (req, res) => {
  const tickets = await queue.getQueue(req.query.room, req.query.uuid);
  resHandler.yahResponse(res, tickets);
};

exports.postTickets = async (req, res) => {
  const tickets = await queue.insertTicketsInQueue(req.body);
  resHandler.yahResponse(res, tickets);
};

exports.deleteTickets = async (req, res) => {
  const s = await student.getStudent(req.params.studentId);
  if (!s) {
    throw new AccessDeniedError('student id not valid');
  }
  const tickets = await queue.deleteTickets(req.params.ticketId, req.params.studentId);
  resHandler.yahResponse(res, tickets === 0 ? { status: 'ko' } : { status: 'ok' });
};

exports.deleteLastTickets = async (req, res) => {
  const ticket = await queue.deleteLastTickets(req.params.room);
  resHandler.yahResponse(res, !ticket ? { status: 'ko' } : { status: 'ok' });
};

exports.checkRoomId = async (req, res) => {
  const room = await queue.getRoomId(req.body.room);
  console.log(room);

  resHandler.yahResponse(res, room ? { id: room.id } : { id: -1 });
};
