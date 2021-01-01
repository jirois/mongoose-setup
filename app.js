const mongoose = require('mongoose');

// mongo db setup using mongoose
const uri = 'mongodb://localhost:27017/uptha';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// create a connection
mongoose.connect(uri, options)
.then(() => {
    console.log("Connected!")
}).catch(err => {
    console.log(err)
})

// setup a schema/model
const userSchema = new mongoose.Schema({
    first: String,
    last: String
})

// populate the database
const userModel = mongoose.model('User', userSchema)
const userDoc = new userModel({
    first: 'Omas',
    last: 'Ajiri'
})
userDoc.save()
