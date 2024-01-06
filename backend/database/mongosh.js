const mongoose = require('mongoose');
const bookmodel = require('./bookmodel')

main().catch(err => console.log(err.messge));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bookapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = mongoose