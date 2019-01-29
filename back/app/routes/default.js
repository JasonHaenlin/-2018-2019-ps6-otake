
const LogTheInfo = require('@root/app/config/logger').LogTheInfo;

module.exports = async (req, res) => {
  LogTheInfo('Listening on my ass');
  res.send('Main Page, Welcome');
};
