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
  
  let template = undefined

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