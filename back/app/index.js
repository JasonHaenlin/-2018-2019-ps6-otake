const express = require('express');
const route = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const auth = require('./controller/auth');
const { handle404Error, handleDevErrors, handleClientErrors, logErrors } = require('./middlewares/error-handlers');
const app = express();


app.disable('x-powered-by');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sess = {
  secret: 'cute little cookie',
  resave: false,
  saveUninitialized: false,
  cookie: {}
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}

app.use(session(sess));

// Passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());


// add all the routes
app.use('/status', route.main);
// school url
app.use('/school', route.school);
// universities url
app.use('/universities', route.universities);
// auth url
app.use('/auth', route.auth);
// account url
app.use('/account', auth.ensureAuthenticated, route.account);

// catch 404 and forward to error handler
// triggered when a non-existent route attempts to be accessed
app.use(handle404Error);

// log the errors
app.use(logErrors);

// client error handler
app.use(handleClientErrors);

// dev error handler
app.use(handleDevErrors);

module.exports = app;
