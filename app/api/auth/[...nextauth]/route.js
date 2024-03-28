import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/libs/mongoClient";
export const nextAuthOptions = {
    secret:process.env.APP_KEY,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ]
}
const handler = NextAuth(nextAuthOptions)

export {handler as GET, handler as POST}