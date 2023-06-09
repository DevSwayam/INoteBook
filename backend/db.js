const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connecToMongo = async() => {
    await mongoose.connect(mongoURI);
    console.log("Connected to mongoose")
}

module.exports = connecToMongo