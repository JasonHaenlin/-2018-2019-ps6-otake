require('../../server');
const assert = require('assert');

const { Testimonial } = require('../../app/middlewares/orm/models');

describe('Testimonial controller to database', () => {
  it('should get the list of Testimonials from the database', async () => {
    const res = await Testimonial.query();
    assert.ok(res.length > 0);
  });
});
