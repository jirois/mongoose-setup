const dotenv = require('dotenv');
dotenv.config()

module.exports = {
    dbProductionUri : process.env.MONGO_URI,
    dbDevUri : process.env.MONGO_DB,
    env : process.env.NODE_ENV
}