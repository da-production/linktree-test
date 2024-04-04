'use server'
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import { UserMeta } from "@/models/UserMeta";


export default async function StoreUserMeta(state,form) {

    mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(nextAuthOptions);
    const user = await User.findOne().where('email',session.user.email).exec();
    try{
        const query = {userId:user._id},
        update = { 
            userId:user._id,
            bio: form.get('bio'),
            description: form.get('description'),
            birthday: form.get('birthday'),
            website: form.get('website'),
            country: form.get('country'),
            address: form.get('address'),
        },
        options = { upsert: true, new: true, setDefaultsOnInsert: true };

        if(form.get('username')?.length > 0){
            Object.assign(update,{username: form.get('username')})
        }
        await UserMeta.findOneAndUpdate(query,update,options)
        return Object.fromEntries(form)
    }catch(errors){
        console.log(errors)
    }

}