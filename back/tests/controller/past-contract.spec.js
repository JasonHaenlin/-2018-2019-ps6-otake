require('../../server');
const assert = require('assert');

const { pastContract } = require('../../app/controller/school');

describe('past contracts controller to database', () => {
  it('should get the list of contracts from the database', async () => {
    const res = await pastContract.getPastContracts();
    assert.ok(res.length > 0);
  });
  it('should get the list of contracts join with geographical_area and speciality', async () => {
    const res = await pastContract.getLinksBySpecialityAndGeographicalArea('IMAFA', 'NA');
    assert.ok(res.length > 0);
  });
});
