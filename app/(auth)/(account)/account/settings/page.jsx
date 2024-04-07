import React from 'react'
import Form from './Form'
import { User } from '@/models/User';
import { UserMeta } from '@/models/UserMeta';
import { auth } from '@/auth';
import { getUserByEmail } from '@/data/user';

async function page(req) {
    const session = await auth();
  return (
    <div className='w-full px-10 '>
        <pre>
        {JSON.stringify(session)}
        </pre>
        <Form user={JSON.parse(JSON.stringify(session.user))} />
    </div>
  )
}

export default page