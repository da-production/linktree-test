import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user"

import bcryptjs from "bcryptjs"
import { NextResponse } from "next/server"

export default {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET  as string,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                console.log("credentials: ---", credentials);
                
                const validatedFields = LoginSchema.safeParse(credentials)
                if(validatedFields.success) {

                    const { email, password } = validatedFields.data

                    const user = await getUserByEmail(email)

                    console.log("Email ------:" , user)
                    
                    if(!user || !user?.password){
                        return NextResponse.json({error: "Email or Password is incorrect"}, {status: 401})
                    }

                    const passwordMatch = await bcryptjs.compare(password, user.password)
                    console.log("password match:",passwordMatch);
                    
                    if(passwordMatch){
                        return user;
                    }
                }
                return null
            }
        })
    ],
} satisfies NextAuthConfig