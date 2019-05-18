const crypt = require('./app/utils/crypt');

crypt.cipher(process.argv[2])
  .then((hash) => console.log(`Hash: ${hash}`))
  .catch(err => console.log(err));
