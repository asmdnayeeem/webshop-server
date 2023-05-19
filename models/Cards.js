const mongoose = require('mongoose')
const Schema=mongoose.Schema

const CardSchema=new Schema({
    base64:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    brand:{  
        type:String,
        required:true,
    },
    price:{  
        type:String,
        required:true,
    },
    discription:{  
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    }
})


const Card=mongoose.model('Card',CardSchema,"card");
module.exports=Card;