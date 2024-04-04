const { Schema, models, model } = require("mongoose");

const MetaSchema = new Schema({ 
    username: {type: String, required: true, unique:true },
    bio: {type: String},
});
const UserMetaSchema = new Schema({
    userId: {type:"ObjectId", ref:"User",required:true},
    username: {type: String, required: true, min:3,unique:true },
    bio: {type: String},
    description: {type:String},
    birthday: {type:String},
    website: {type:String},
    country: {type: String},
    address: {type: String},
})

export const UserMeta = models.UserMeta || model('UserMeta',UserMetaSchema); 