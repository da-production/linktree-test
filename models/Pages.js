const { Schema, models, model } = require("mongoose");

const PageSchema = new Schema({
    userId: {type:'ObjectId',ref:'User',required:true},
    owner: {type:String, required:true},
    uri: {type:String, required:true, min:1, unique:[true,'page name most be unique']},
    bio:{type:String, required:true,min:1},
    profile_picture: {type:String},
    background_image: {type:String},
    background_color: {type:String},
},{timestamps:true})

export const Page = models?.Page || model('Page', PageSchema)