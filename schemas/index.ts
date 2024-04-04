import * as z from "zod";
export const LoginSchema = z.object({
    email: z.string().email({message:"Email address is required"}),
    password: z.string().min(1,{message:"Password is required"})
});

export const RegisterSchema = z.object({
    name: z.string().min(1,{message:"Username is required"}).max(50,{message:"Username must be less than 50 characters"}),
    email: z.string().email({message:"Email address is required"}),
    password: z.string().min(1,{message:"Password is required"}).max(50,{message:"Password must be less than 50 characters"}),
    // confirmPassword: z.string().min(1,{message:"Confirm Password is required"}).max(10,{message:"Confirm Password must be less than 10 characters"}).refine((val,ctx)=>val===ctx.password,{message:"Passwords do not match"})
});