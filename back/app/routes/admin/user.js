const resHandler = require('../../utils/response-handler');
const auth = require('../../controller/admin/auth');
const { user } = require('../../controller/admin');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const u = await user.getUser(username);
  await auth.checkPassword(u, password);
  resHandler.yahResponse(res, 'CONNECTED');
};
