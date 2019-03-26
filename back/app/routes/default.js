
const LogTheInfo = require('@root/app/config/logger').LogTheInfo;

module.exports = async (req, res) => {
  LogTheInfo('Listening');
  res.send('Main Page, Welcome');
};
