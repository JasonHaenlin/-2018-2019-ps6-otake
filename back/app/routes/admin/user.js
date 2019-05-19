const resHandler = require('../../utils/response-handler');
const auth = require('../../controller/admin/auth');
const { user } = require('../../controller/admin');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const u = await user.getUser(username);
  // check if the passwords match
  await auth.checkPassword(u, password);
  // if no error, login
  req.login(u, (err) => console.log(err));
  resHandler.yahResponse(res, u);
};


exports.admin = async (req, res) => {
  resHandler.yahResponse(res, auth.ensureAuthenticated(req));
};


exports.logoutUser = async (req, res) => {
  req.logout();
  resHandler.yahResponse(res, 'ok');
};
