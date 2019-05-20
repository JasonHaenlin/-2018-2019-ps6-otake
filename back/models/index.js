const major = require('./major');
const geographicalArea = require('./geographical-area');
const country = require('./country');
const city = require('./city');
const exchangeUniversity = require('./exchange-university');
const language = require('./language.js');
const university_language = require('./university_language');
const studyDepartement = require('./study-departement');
const speciality = require('./speciality');
const majorSpeciality = require('./major-speciality');
const course = require('./course');
const testimonial = require('./testimonial');
const deadline = require('./deadline');
const past_contract = require('./past-contract');
const supervisor = require('./supervisor');
const financialAid = require('./financial-aid');
const user = require('./user');
const token = require('./token');

/**
 * All the table are sort here
 * be sure to insert them in the right order
 * regarding the constraints
 */

module.exports = [
  token,
  geographicalArea,
  country,
  city,
  exchangeUniversity,
  language,
  university_language,
  major,
  testimonial,
  speciality,
  majorSpeciality,
  course,
  studyDepartement,
  deadline,
  past_contract,
  supervisor,
  financialAid,
  user
];
