import React from 'react'
import Form from './Form'
import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { User } from '@/models/User';
import { UserMeta } from '@/models/UserMeta';

async function page(req) {
    console.log(req)
    const session = await getServerSession(nextAuthOptions);
    mongoose.connect(process.env.MONGODB_URI)
    const user = await User.findOne().where("email",session.user.email).exec()
    const usermeta = await UserMeta.findOne().where('userId',user._id).exec()
  return (
    <div className='w-full px-10 '>
        <Form usermetas={JSON.parse(JSON.stringify(usermeta))} />
    </div>
  )
}

export default page