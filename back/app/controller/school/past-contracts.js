const { PastContract } = require('../../middlewares/orm/models');

module.exports = {
  getPastContracts() {
    return PastContract.query();
  },
  getLinksBySpecialityAndGeographicalArea(specialityShorthand) {
    return PastContract.query()
      .alias('pc')
      .select('pc.link as url',
        'university:city:country:geographical_area.area_name as geographical_area',
        'university:city:country.country_name as country',
        'university.name as university',
      )
      .joinRelation('[university.city.country.geographical_area, speciality]')
      .where({ 'speciality.shorthand': specialityShorthand })
      .then(res => convertResult(res));
  }


};

const convertResult = (resultat) => {
  const res = [];
  const areaSet = new Set();
  resultat.forEach(r => {
    areaSet.add(r.geographical_area);
  });
  const country = [];
  for (let area of areaSet) {
    const countrySet = new Set();
    resultat.forEach(r => {
      if (r.geographical_area === area) {
        countrySet.add(r.country);
      }
    });
    for (let name of countrySet) {
      const universitySet = new Set();
      resultat.forEach(r => {
        if (r.country === name) {
          universitySet.add(r.university);
        }
      });
      const contract_by_university = [];
      const contract = [];
      for (let university of universitySet) {
        resultat.forEach(r => {
          if (r.university === university) {
            contract.push(r.url);
          }
        });
        contract_by_university.push({ university, contract });
      }
      country.push({ name, contract_by_university });
    }
    res.push({ area, country });
  }
  return res;
};
