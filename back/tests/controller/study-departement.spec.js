require('../../server');
const assert = require('assert');

const { StudyDepartement } = require('../../app/middlewares/orm/models');

const getstudyDepartementsRaw = () => {
  return StudyDepartement.query();
};

const getstudyDepartements = () => {
  return StudyDepartement.query()
    .alias('s')
    .select('s.university_id', 'major.title', 'major.shorthand')
    .joinRelation('major');
};

describe('study Departement controller to database', () => {
  it('should get the list of study Departements from the database', async () => {
    const res = await getstudyDepartementsRaw();
    assert.ok(res.length > 0);
  });
  it('should get the list of study Departements join with major from the database', async () => {
    const res = await getstudyDepartements();
    assert.ok(res.length > 0);
    assert.ok(res[0].title.length > 0);
    assert.ok(res[0].shorthand.length > 0);
  });
});
