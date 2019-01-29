require('dotenv').config()
const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

gulp.task('sonar', function (callback) {
  sonarqubeScanner({
    serverUrl: process.env.SONAR_URL,
    token: process.env.SONAR_KEY,
    options: {
      "sonar.projectKey": "ps6-otake-front",
      "sonar.sources": ".",
      "sonar.tests": ".",
    }
  }, callback);
});
