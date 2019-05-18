const crypt = require('./app/utils/crypt');

crypt.cipher(process.argv[0])
  .then((hash) => console.log(`Hash: ${hash}`))
  .catch(err => console.log(err));
