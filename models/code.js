const mongoose=require('mongoose')
const CodeSchm=mongoose.Schema({
    titel:{
        type:String,
        required:true
       
    },code:{
        type:String,
        required:true
    }
    
   

})

module.exports=mongoose.model('mydoc',CodeSchm)