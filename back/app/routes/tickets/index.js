const resHandler = require('@utils/responseHandler');
const ticket = require('@controller/tickets');

// using the database
exports.getTickets = async (req, res) => {
  const tickets = await ticket.getAllTickets();
  resHandler.yahResponse(res, tickets);
};

exports.getTicketsById = async (req, res) => {
  const id = req.params.id;
  const tickets = await ticket.getTicketsById(id);
  res.json(tickets);
};

exports.createTickets = async (req, res) => {
  const newTicket = await ticket.createTicket(req.body);
  resHandler.yahResponse(res, newTicket, true);
};

exports.updateTicket = async (req, res) => {
  const updatedTicket = await ticket.updateTicket(req.body, req.params.ticketId);
  resHandler.yahResponse(res, updatedTicket);
};

exports.deleteTicket = async (req, res) => {
  const deletedTicket = await ticket.deleteTicket(req.params.ticketId);
  resHandler.yahResponse(res, deletedTicket);
};
