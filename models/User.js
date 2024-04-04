const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    image: {type:String}
})

export const User = models?.User || model('User',UserSchema);