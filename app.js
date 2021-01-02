const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
// mongo db setup using mongoose
// const uri = 'mongodb://localhost:27017/uptha';
const uri = 'mongodb+srv://omasajiri:connectapp@fcc-cluster.g0l0u.mongodb.net/upthere?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// create a connection
mongoose.connect(process.env.MONGO_URI, options)
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

//populate the database
const userModel = mongoose.model('User', userSchema)
const userDoc = new userModel({
    first: 'Jazx',
    last: 'Ajiri'
})
userDoc.save()

