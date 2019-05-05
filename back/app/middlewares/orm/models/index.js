const Major = require('./major');
const GeographicalArea = require('./geographical-area');
const Country = require('./country');
const City = require('./city');
const ExchangeUniversity = require('./exchange-university');
const Language = require('./language');
const UniversityLanguage = require('./university_language');
const StudyDepartement = require('./study-departement');
const Speciality = require('./speciality');
const MajorSpeciality = require('./major-speciality');
const Course = require('./course');
const Testimonial = require('./testimonial');
const Deadline = require('./deadline');
const PastContract = require('./past-contract');
const Supervisor = require('./supervisor');
const FinancialAid = require('./financial-aid');

// add all the tables here
module.exports = {
  Major,
  GeographicalArea,
  Country,
  City,
  ExchangeUniversity,
  Testimonial,
  Language,
  UniversityLanguage,
  StudyDepartement,
  MajorSpeciality,
  Speciality,
  Course,
  Deadline,
  PastContract,
  Supervisor,
  FinancialAid
};
