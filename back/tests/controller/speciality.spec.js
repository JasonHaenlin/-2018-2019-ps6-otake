require('../../server');
const assert = require('assert');

const { speciality } = require('../../app/controller/school');


describe('speciality controller to database', () => {
  it('should get the list of specialities from the database', async () => {
    const res = await speciality.getCardSpecialities('SI');
    assert.ok(res.length > 0);
  });
});
