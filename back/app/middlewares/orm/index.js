const Major = require('./models/major');
const GeographicalArea = require('./models/geographical-area');
const Country = require('./models/country');
const City = require('./models/city');
const ExchangeUniversity = require('./models/exchange-university');
const Language = require('./models/language');
const studyDepartement = require('./models/study-departement');

// add all the tables here
module.exports = {
  Major,
  GeographicalArea,
  Country,
  City,
  ExchangeUniversity,
  Language,
  studyDepartement
};
