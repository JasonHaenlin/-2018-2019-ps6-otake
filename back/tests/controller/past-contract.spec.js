require('../../server');
const assert = require('assert');

const { pastContract } = require('../../app/controller/school');

const getLinksBySpecialityAndGeographicalArea = (specialityShorthand, geographicalArea) => {
  return  PastContract.query()
    .alias('pc')
    .select('pc.link')
    .joinRelation('[exchange_university.city.country.geographical_area, speciality')
    .where({ 'geographical_area.name': geographicalArea }, { 'speciality.shorthand': specialityShorthand})
};

describe('past contracts controller to database', () => {
  it('should get the list of contracts from the database', async () => {
    const res = await pastContract.getPastContracts();
    assert.ok(res.length > 0);
  });
  // it('should get the list of contracts join with geographical_area and speciality', async () => {
  //   const res = await getLinksBySpecialityAndGeographicalArea('IMAFA', 'Amérique du Nord');
  //   assert.ok(res.length > 0);
  // });
});
