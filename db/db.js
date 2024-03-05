const mongoose= require('mongoose')
const MongoConnection=(uri)=>{
    return mongoose.connect(uri)
}

module.exports=MongoConnection