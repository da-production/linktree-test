import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config";
import { db } from "./libs/db";
import { getUserByEmail, getUserMetaData } from "./data/user";
export const {
    handlers: {GET,POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    events:{
        async linkAccount({user:{id}}) {
            await db.user.update({
                where: {id},
                data: {
                    emailVerified: new Date()
                }
            })
        }
    },
    callbacks:{
        async jwt({token}){
            if(!token.sub) return token;
            const user = await getUserByEmail(token.email);
            const meta = await getUserMetaData(token.sub)
            token.role = user.role;
            token.meta = meta;
            console.log(token);
            return token;
        },
        async session({session, token}) {
            if(token.sub && session.user){
                session.user.id = token.sub
                session.user.role = token.role
            }
            if(session.user && token.meta){
                session.user.meta = token.meta
            }
            return session;
        },
    },
    adapter: PrismaAdapter(db),
    session: {strategy: 'jwt'},
    ...authConfig
})