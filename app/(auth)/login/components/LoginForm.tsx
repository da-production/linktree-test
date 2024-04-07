"use client"
import Icones from "@/app/components/ui/Icones"
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { LoginSchema } from "@/schemas";
import LoginAction from "@/_actions/LoginAction";
import {useState, useTransition} from "react"


const LoginForm = () => {

    const [error,setError] = useState<string | undefined>()
    const [success,setSuccess] = useState<string | undefined>()
    const [isPending,startTransition] = useTransition()

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:zodResolver(LoginSchema)
    })

    const submit = async (data: z.infer<typeof LoginSchema>) => {
        setError(undefined)
        setSuccess(undefined)
        startTransition(async ()=>{

            await LoginAction(data)
            .then(data=>{
                setError(data?.error)
                setSuccess(data?.success)
            })
            .catch(error=>{
                console.log(error)
            })
        })
    }

    return (  
        <>
            {
                error && <div className="flex items-center space-x-2 p-3 rounded-lg bg-red-100 border-2 border-red-200 text-xs">
                    <p className="text-red-500">{error}</p>
                </div>
            }
            {
                success && <div className="flex items-center space-x-2 p-3 rounded-lg bg-green-100 border-2 border-green-200 text-xs">
                    <p className="text-green-700">{success}</p>
                </div>
            }
            <form className='flex flex-col w-full space-y-5' onSubmit={handleSubmit(submit)}>
                {/* <div className='w-full relative'>
                    <label className='absolute left-4 top-[14px] font-semibold'>linkhub.to/</label>
                    <input
                    {...register('username')}
                    type="text"
                    placeholder="Username"
                    className="flex pr-3 pl-24 py-2 w-full  md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                    <small className="text-xs text-red-500">{errors?.username}</small>
                </div> */}
                <div className='w-full relative'>
                    <label className='absolute left-4 top-[14px] font-semibold'>
                        <Icones.email className="w-6" />
                    </label>
                    <input
                    
                    {...register('email')}
                    type="email"
                    placeholder="Email"
                    className="flex pr-3 pl-11 py-2 w-full  md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                    
                    <small className="text-xs text-red-500">{errors?.email?.message}</small>
                </div>
                <div className='w-full relative'>
                    <label className='absolute left-4 top-[14px] font-semibold'>
                        <Icones.lockTabler className="w-6" />
                    </label>
                    <input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                    className="flex pr-3 pl-11 py-2 w-full  md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                    <small className="text-xs text-red-500">{errors?.password?.message}</small>
                </div>
                
                <button disabled={isPending} className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                    {isPending ? (<Icones.spinner className="size-6" />) : "Join"}
                </button>
                
            </form>
        </>
    )
}
 
export default LoginForm