"use client"
import StoreUserMeta from '@/app/actions/StoreUserMeta'
import Icones from '@/app/components/ui/Icones'
import { SubmitButton } from '@/app/components/ui/SubmitButton'
import {useFormState, useFormStatus} from 'react-dom'
import React, { useContext, useEffect, useState } from 'react' 
import { AccountContext } from '@/stores/Account'
import countries from '@/libs/countries'
import Tooltip from '@/app/components/ui/Tooltip'
function Form({usermetas}) {
    const [state, formState] = useFormState(StoreUserMeta,null)
    const [tArea, setTArea] = useState(usermetas?.description)
    const {setUsername} = useContext(AccountContext)

    return (
        <div className='w-full flex flex-col  justify-center '>
                <h1 className='text-2xl text-slate-900 font-bold mb-5 mt-5'>Settings</h1>
                <form action={formState} className='space-y-8'>
                    <div className='flex gap-5 items-center'>
                        <div>
                            <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2 '>
                                <label htmlFor='username'>
                                    <Icones.email className="w-6" />
                                </label>
                                {
                                    usermetas?.username ? (
                                        <input type='text' defaultValue={usermetas?.username} placeholder='clame a username' disabled={true} className='outline-none w-52' />
                                    ) : (
                                        <input 
                                            type='text' 
                                            id='username' 
                                            defaultValue={usermetas?.username} 
                                            placeholder='clame a username' 
                                            name='username' 
                                            className='outline-none w-52' 
                                            onChange={(e)=>setUsername(e.target.value)}
                                            />
                                    )
                                }
                                
                            </div>
                            <div className='mt-3'>
                                <small className='relative text-xs group justify-between flex gap-2 items-center'>
                                    <span className='text-red-500 '></span>
                                    <div className='cursor-pointer relative'>
                                        <Icones.questionSolarCircle className='w-4' />
                                    </div>
                                    <Tooltip title="once you choose a username you will not be able to updated" position="tooltip__br"  />
                                </small>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2  '>
                                <label htmlFor='bio'>
                                    <Icones.bioSolar className="w-6" />
                                </label>
                                <input type='text' id='bio' defaultValue={usermetas?.bio} placeholder='Short Bio' name='bio' className='outline-none w-full' />
                            </div>
                            <div className='mt-3'>
                                <small className='relative text-xs justify-between flex gap-2 items-center'>
                                    <span className='text-red-500 '></span>
                                    <span className='cursor-pointer'><Icones.questionSolarCircle className='w-4' /></span>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2  '>
                            <label htmlFor='description'>
                                <Icones.document className="w-6" />
                            </label>
                            <textArea rows={3}  onChange={(e)=>setTArea(e.target.value)} id='description' placeholder='More About You' name='description' className='resize-none outline-none w-full'>{tArea}</textArea>
                        </div>
                        <div className='mt-3'>
                            <small className='relative text-xs justify-between flex gap-2 items-center'>
                                <span className='text-red-500 '></span>
                                <span className='cursor-pointer'><Icones.questionSolarCircle className='w-4' /></span>
                            </small>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div>
                            <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2 '>
                                <label htmlFor='birthday'>
                                    <Icones.calendar className="w-6" />
                                </label>
                                <input 
                                    type='date' 
                                    id='birthday' 
                                    defaultValue={usermetas?.birthday} 
                                    placeholder='Birthday' 
                                    name='birthday' 
                                    className='outline-none w-52' 
                                    />
                                
                            </div>
                            <div className='mt-3'>
                                <small className='relative text-xs justify-between flex gap-2 items-center'>
                                    <span className='text-red-500 '></span>
                                    <span className='cursor-pointer'><Icones.questionSolarCircle className='w-4' /></span>
                                </small>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2  '>
                                <label htmlFor='website'>
                                    <Icones.linkSolar className="w-6" />
                                </label>
                                <input type='url' id='website' defaultValue={usermetas?.website} placeholder='Website' name='website' className='outline-none w-full' />
                            </div>
                            <div className='mt-3'>
                                <small className='relative text-xs justify-between flex gap-2 items-center'>
                                    <span className='text-red-500 '></span>
                                    <span className='cursor-pointer'><Icones.questionSolarCircle className='w-4' /></span>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div>
                            <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2 '>
                                <label htmlFor='birthday'>
                                    <Icones.earthBold className="w-6" />
                                </label>
                                <select className='outline-none w-52' name='country' defaultValue={usermetas?.country}>
                                    <option>Country</option>
                                    {
                                        countries.map(country => (
                                            <option defaultValue={usermetas?.country == country.name} value={country.name} key={country.code}>{country.name}</option>
                                        ))
                                    }
                                </select>
                                
                            </div>
                            <div className='mt-3'>
                                <small className='relative text-xs justify-between flex gap-2 items-center'>
                                    <span className='text-red-500 '></span>
                                    <span className='cursor-pointer'><Icones.questionSolarCircle className='w-4' /></span>
                                </small>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='relative flex gap-3 border-b-2 border-slate-900 pb-2  '>
                                <label htmlFor='address'>
                                    <Icones.smartHome className="w-6" />
                                </label>
                                <input type='text' id='address' defaultValue={usermetas?.address} placeholder='Address' name='address' className='outline-none w-full' />
                            </div>
                            <div className='mt-3'>
                                <small className='relative text-xs justify-between flex gap-2 items-center'>
                                    <span className='text-red-500 '></span>
                                    <span className='cursor-pointer'><Icones.questionSolarCircle className='w-4' /></span>
                                </small>
                            </div>
                        </div>
                    </div>
                    <SubmitButton title="Update" className="flex items-center gap-2 justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white" />
                    
                </form>
            </div>
    )
}

export default Form