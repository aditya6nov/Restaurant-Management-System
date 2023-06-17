const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/restaurent')

updateSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("updates",updateSchema)
