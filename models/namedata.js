const mongoose = require('mongoose')
const namescheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state:{
        type:String 
    }
})

module.exports = mongoose.model('namedata', namescheme)