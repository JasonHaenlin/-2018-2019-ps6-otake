require('../../server');
const assert = require('assert');

const ticket = require('@controller/tickets');

describe('ticket controller to database', () => {
  it('should get the list of ticket from the database', async () => {
    const res = await ticket.getAllTickets();
    assert.ok(res.length > 0);
  });
});
