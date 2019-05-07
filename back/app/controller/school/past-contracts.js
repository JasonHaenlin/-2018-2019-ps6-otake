const { PastContract } = require('../../middlewares/orm/models');

module.exports = {
  getPastContracts() {
    return PastContract.query();
  },
  getLinksBySpecialityAndGeographicalArea(specialityShorthand) {
    return PastContract.query()
      .alias('pc')
      .select('pc.link',
        'university:city:country:geographical_area.area_name',
        'university:city:country.country_name',
        'university.name',
      )
      .joinRelation('[university.city.country.geographical_area, speciality]')
      .where({ 'speciality.shorthand': specialityShorthand })
      .then(res => {
        const resultat = [];
        res.forEach(r => {
          const url = r.link;
          const university = r.name;
          const country = r.country_name;
          const geographical_area = r.area_name;
          resultat.push({ url, university, country, geographical_area });
        });
        return convertResult(resultat);
      });
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

