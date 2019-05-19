const resHandler = require('../../utils/response-handler');
const auth = require('../../controller/account/auth');
const { user } = require('../../controller/account');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const u = await user.getUser(username);
  // check if the passwords match
  await auth.checkPassword(u, password);
  // if no error, login
  req.login(u, (err) => console.log(err));
  resHandler.yahResponse(res, 'Successfully login');
};

exports.logoutUser = async (req, res) => {
  req.logout();
  resHandler.yahResponse(res, 'Successfully logout');
};
