const mongoose = require('mongoose')
const Schema=mongoose.Schema

const ShopSchema=new Schema({
    type:{
        type:String,
        required:true,
    },
    brand:{  
        type:String,
        required:true,
    },
    price:{  
        type:Int8Array,
        required:true,
    },
    discription:{  
        type:String,
        required:true,
    },
})

const Shop=mongoose.model('Shop',ShopSchema,"shop");
module.exports=Shop;