// simple example using objection and knex
const Ticket = require('@orm').Ticket;

module.exports = {
  getAllTickets() {
    // select * from ticket = Ticket.query();
    return Ticket.query()
      .alias('t')
      .select('t.id', 't.title', 't.description', 'author.name')
      .joinRelation('author');
    // .where({ 'a.id': 1 }); //the same
    // .where('a.id', 1);
  },

  getTicketsById(id) {
    return Ticket.query()
      .where({ 'ticket.id': id });
  },

  createTicket(ticket) {
    return Ticket.query()
      .allowInsert('[title, description, author_id]')
      .insert(ticket);
  },

  updateTicket(ticket, id) {
    return Ticket.query()
      .patchAndFetchById(id, ticket);
    // .where('id', id);
    // .returning('*');
  },

  deleteTicket(id) {
    return Ticket.query()
      .delete()
      .where({ id: id })
      .returning('*');
    // .deleteById(id);
  }
};
