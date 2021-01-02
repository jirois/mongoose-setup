const mongoose = require('mongoose');

const { dbDevUri, dbProductionUri, env } = require('./config');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// create a connection
if (env === 'development') {
    mongoose.connect(dbDevUri, options)
    .then(() => {
        console.log("Connected!")
    }).catch(err => {
        console.log(err)
    })
} else if (env === 'production') {
    mongoose.connect(dbProductionUri, options)
    .then(() => {
        console.log("Connected!")
    }).catch(err => {
        console.log(err)
    })
}

