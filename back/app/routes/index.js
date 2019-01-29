const express = require('express');
const handleExceptions = require('../middlewares/errorHandlers').handleExceptions;

/**
 * If the application is small, routers can be set in a single file, otherwise, * multiple file are suitable.
 * And use a main index file to export everything
 * Example
 * -------------------
 * --routes
 * ------tickets
 * ----------index
 * ----------displayAllTickets
 * ------otherAction
 * ----------index
 * --index
 * -------------------
 */

const Tickets = require('./tickets');

const main = express.Router();
const tickets = express.Router();
const error = express.Router();

/* -- default -- */
main.get('/', handleExceptions(require('./default')));
main.get('/meagain', handleExceptions(require('./default')));

/* -- tickets -- */
/* get */
tickets.get('/', handleExceptions(Tickets.getTickets));
tickets.get('/:id', handleExceptions(Tickets.getTicketsById));
/* post */
tickets.post('/', handleExceptions(Tickets.createTickets));
/* put */
tickets.put('/:ticketId', handleExceptions(Tickets.updateTicket));
/* delete */
tickets.delete('/:ticketId', handleExceptions(Tickets.deleteTicket));

/* -- error -- */
/* get */
error.get('/', handleExceptions(require('./error')));

module.exports = { main, tickets, error };
