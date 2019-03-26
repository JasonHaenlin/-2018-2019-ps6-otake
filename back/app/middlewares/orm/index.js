const Ticket = require('./models/ticket');
const Author = require('./models/author');
const Major = require('./models/major');
const GeographicalArea = require('./models/geographicalArea');
const Country = require('./models/country');
const City = require('./models/city');
const ExchangeUniversity = require('./models/exchangeUniversity');
const Language = require('./models/language');
const studyDepartement = require('./models/studyDepartement');

// add all the tables here
module.exports = {
  Ticket,
  Author,
  Major,
  GeographicalArea,
  Country,
  City,
  ExchangeUniversity,
  Language,
  studyDepartement
};
