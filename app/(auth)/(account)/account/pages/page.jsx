import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import Icones from '@/app/components/ui/Icones'
import PageCard from '@/app/components/ui/PageCard'
import { Page } from '@/models/Pages'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

async function page() {
    const pages = []
    return (
        <div className='grid grid-cols-4 gap-10 p-5'>
            {
                pages.map(page => (
                    <Link href={`/account?uri=${page.uri}`} className='col-span-1' key={page._id}>
                        <PageCard page={page} />
                    </Link>
                ))
            }
            
            <div className='col-span-1'>
                <Link href="/account/pages/create" className='w-full min-h-[364px] h-full flex flex-col gap-5 justify-center items-center border-4 border-dashed rounded-[20px]'>
                    <Icones.addSolarSquare className="w-10" />
                    <span>Create new page</span>
                </Link>
            </div>
        </div>
    )
}

export default page