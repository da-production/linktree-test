import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { API_AUTH_PREFIX, AUTH_ROUTES, DEFAULT_LOGIN_REDIRECT, PUBLIC_ROUTES } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {

    const isLoggedIn = !!req.auth;

    console.log("------------------------------ isloggedin ------------------------------",isLoggedIn);
    

    const isApiAuthPrefix =  req.nextUrl.pathname.startsWith(API_AUTH_PREFIX);
    const isPublicRoutes = PUBLIC_ROUTES.includes(req.nextUrl.pathname);
    const isAuthRoutes= AUTH_ROUTES.includes(req.nextUrl.pathname);

    if(isApiAuthPrefix){
        return null
    }

    if(isAuthRoutes){
        
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,req.nextUrl))
        }
        return null
    }

    if(!isLoggedIn && !isPublicRoutes){
        return Response.redirect(new URL("/login",req.nextUrl))
    }
    
    return null
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}