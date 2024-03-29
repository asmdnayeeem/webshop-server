const mongoose = require('mongoose')
const Schema =mongoose.Schema

const ImageSchema =new Schema({
    name:{
        type:String,
        required:true,
    },
    base64:{
        type:String,
        required:true,
    }
})

const Image=mongoose.model('Image',ImageSchema,'images')

module.exports =Image