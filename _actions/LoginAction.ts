"use server"
import { LoginSchema } from "@/schemas"
import { z } from "zod"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

const LoginAction = async(values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if(!validatedFields.success){
        return { error: "invalide fields! "}
    }

    const {email,password} = validatedFields.data
    try {
        await signIn('credentials', { email, password, redirectTo: DEFAULT_LOGIN_REDIRECT })
    }catch(error){
        if (error instanceof AuthError){
            switch(error.type){
                case 'CredentialsSignin':
                    return { error: "invalid credentials" }
                default:
                    return { error: "unknown error" }
            }
        }
        console.log(error);
        
        throw error
    }
}

export default LoginAction