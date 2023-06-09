const mongoose = require('mongoose');

const notesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default: "general"
    },
    date:{
        type:date,
        default:Date.now
    },
    toRemember:{
        type:String
    }
  });
  module.exports = mongoose.model('notes',notesSchema)