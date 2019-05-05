const { PastContract } = require('../../middlewares/orm/models');

module.exports = {
  getPastContracts() {
    return PastContract.query();
  },
  getLinksBySpecialityAndGeographicalArea(specialityShorthand, geographicalArea) {
    return PastContract.query()
      .alias('pc')
      .select('pc.link',
        'university:city:country:geographical_area.area_name',
        'university:city:country.country_name',
        'university.name',
      )
      .joinRelation('[university.city.country.geographical_area, speciality]')
      .where({ 'university:city:country:geographical_area.shorthand': geographicalArea },
        { 'speciality.shorthand': specialityShorthand });
  }

};
