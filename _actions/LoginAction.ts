"use server"
import { getUserByEmail } from "@/data/user"
import { LoginSchema } from "@/schemas"
import { z } from "zod"

const LoginAction = async(values: z.infer<typeof LoginSchema>) => {
    const validateFileds = LoginSchema.safeParse(values)
    if(validateFileds.success){
        const {email,password} = validateFileds.data

        const user = await getUserByEmail(email)
        console.log(user)

        return {success: "loged in"}
    }
    return {error: "please fill all fields"}
}

export default LoginAction