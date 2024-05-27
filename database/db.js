const mongoose = require('mongoose');
const dbconn = mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DB_PASSWORD}@param.eplofy0.mongodb.net/`).then((x, err) => {
  if (err) throw err
  console.log(`Database is connected`)
})
module.exports = dbconn;