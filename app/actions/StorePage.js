'use server'

import {Page} from "@/models/Pages";
import mongoose from "mongoose"
import {getServerSession} from "next-auth";
import {nextAuthOptions} from "../api/auth/[...nextauth]/route";
import {User} from "@/models/User";

const delay = ms => new Promise(res => setTimeout(res, ms));

export default async function StorePage(state, form) {
    // await delay(5000);
    try {
        mongoose.connect(process.env.MONGODB_URI);
        const session = await getServerSession(nextAuthOptions);
        const userId = await User.findOne({}, '_id')
            .where('email', session.user.email)
            .exec();

        await Page.create({
            userId: userId._id,
            owner: session.user.email,
            uri: form.get('uri'),
            bio: form.get('bio')
        })
        return {message:'page was created ',status:201}
    } catch (errors) {
        const validation = {};
        if(errors?._message?.includes('validation failed')){
            Object.values(errors.errors).forEach(({ properties }) => {
                validation[properties.path] = properties.message
            })
        }
        if(errors?.code === 11000){
            validation[Object.keys(errors?.keyPattern)] = "page name already in use"
        }
        console.log(validation);
        return {errors:validation};
        // console.log(errors.errors.uri.properties.message);
        // console.log(Object.keys(errors.errors));
        // console.log(errors);
        // return {'errors':errors.errors};
    }
}