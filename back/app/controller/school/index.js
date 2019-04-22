// simple example using objection and knex
const major = require('./major');
const speciality = require('./speciality');
const course = require('./course');
const info = require('./info');
const supervisor = require('../school/supervisor');

module.exports = {
  major,
  speciality,
  course,
  info,
  supervisor
};
