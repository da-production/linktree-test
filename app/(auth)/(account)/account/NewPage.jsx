"use client"
import Icones from '@/app/components/ui/Icones'
import React, { Suspense } from 'react'
import {useFormState, useFormStatus} from 'react-dom'
import StorePage from '@/app/actions/StorePage'
import { SubmitButton } from '@/app/components/ui/SubmitButton'
import { redirect } from 'next/navigation' 

function NewPage() {
    const [state,formState] = useFormState(StorePage,null)
    const {pending} = useFormStatus()
    if(state?.status == 201) redirect('/account/pages')
    return (
        <div className='w-full max-w-xl mx-auto flex flex-col mt-20 p-20 justify-center '>
            <h1 className='text-xl text-slate-700 font-bold mb-10'>Create New Page</h1>
            <form action={formState} className='space-y-5'>
                <div>
                    <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2 '>
                        <label htmlFor='uri'>
                            <Icones.slashSolar className="w-6" />
                        </label>
                        <input type='text' id='uri' aria-disabled={pending} disabled={pending} placeholder='Page Name' name='uri' className='outline-none w-full' />
                    </div>
                    <div className='mt-3'>
                        <small className='relative text-xs justify-between flex gap-2 items-center'>
                            <span className='text-red-500 '>{state?.errors?.uri && state.errors.uri}</span>
                            <span className='cursor-pointer'><Icones.questionSolarCircle className='w-4' /></span>
                        </small>
                    </div>
                </div>
                <div>
                    <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2 '>
                        <label htmlFor='bio'>
                            <Icones.bioSolar className="w-6" />
                        </label>
                        <input type='text' id='bio' disabled={pending} placeholder='Bio' name='bio' className='outline-none w-full' />
                    </div>
                    <div className='mt-3'>
                        <small className='relative text-xs justify-between flex gap-2 items-center'>
                            <span className='text-red-500 '>{state?.errors?.bio && state.errors.bio}</span>
                            <span className='cursor-pointer'><Icones.questionSolarCircle className='w-4' /></span>
                        </small>
                    </div>
                </div>
                <Suspense  >
                    <SubmitButton title="Create" className="flex items-center gap-2 justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white" />
                </Suspense>
            </form>
        </div>
    )
}

export default NewPage