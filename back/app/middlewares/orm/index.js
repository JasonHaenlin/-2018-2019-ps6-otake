const Major = require('./models/major');
const GeographicalArea = require('./models/geographical-area');
const Country = require('./models/country');
const City = require('./models/city');
const ExchangeUniversity = require('./models/exchange-university');
const Language = require('./models/language');
const UniversityLanguage = require('./models/university_language');
const StudyDepartement = require('./models/study-departement');
const Speciality = require('./models/speciality');
const MajorSpeciality = require('./models/major-speciality');
const Course = require('./models/course');
const Testimonial = require('./models/testimonial');
const Deadline = require('./models/deadline');
const PastContract = require('./models/past-contract');
const Supervisor = require('./models/supervisor');
const FinancialAid = require('./models/financial-aid');

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
