const major = require('./major');
const geographicalArea = require('./geographical-area');
const country = require('./country');
const city = require('./city');
const exchangeUniversity = require('./exchange-university');
const language = require('./language');
const studyDepartement = require('./study-departement');

/**
 * All the table are sort here
 * be sure to insert them in the right order
 * regarding the constraints
 */

module.exports = [
  geographicalArea,
  country,
  city,
  exchangeUniversity,
  language,
  major,
  studyDepartement
];
