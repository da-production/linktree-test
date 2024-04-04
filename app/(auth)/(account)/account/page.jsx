import React from 'react'
import NewPage from './NewPage'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';
import mongoose from 'mongoose';
import { User } from '@/models/User';
import { Page } from '@/models/Pages';
import PageHome from '@/app/components/Reusable/PageHome';

async function page(req) {
  
  const session = await getServerSession(nextAuthOptions);
  if(session == null) redirect('/login')
  let template = undefined
  mongoose.connect(process.env.MONGODB_URI)
  const userId = await User.findOne({},'_id').where('email',session.user.email).exec()
  const page = await Page.findOne().where('userId',userId).exec()
  if(page == null) {
    template = <NewPage />
  }else{
    // if doesn't have page id redirected
    if(req?.searchParams?.uri == undefined) {
      console.log(page)
      redirect(`/account?uri=${page.uri}`)
    }
    
    template = <PageHome uri={req?.searchParams?.uri} />
  }

  return (
    <>
      {template}
    </>
  )
}

export default page