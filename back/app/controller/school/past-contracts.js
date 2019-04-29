const { PastContract,
        Speciality,
        ExchangeUniversity,
        City,
        Country,
        GeographicalArea
         } = require('../../middlewares/orm');

module.exports = {
  getPastContracts() {
    return PastContract.query();
  },
  getLinksBySpecialityAndGeographicalArea(specialityShorthand, geographicalArea) {
    return  PastContract.query()
      .alias('pc')
      .select('pc.link')
      .joinRelation('[exchange_university.city.country.geographical_area, speciality')
      .where({ 'geographical_area.name': geographicalArea }, { 'speciality.shorthand': specialityShorthand})
  }

};
