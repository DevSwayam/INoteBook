const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/NoteBook?"

const connecToMongo = async() => {
    await mongoose.connect(mongoURI);
    console.log("Connected to mongoose")
}

module.exports = connecToMongo