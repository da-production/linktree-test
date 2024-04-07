"use server"
import { createId } from '@paralleldrive/cuid2';
import { getUserByEmail, getUserByUsername } from "@/data/user"
import { db } from "@/libs/db"
import { RegisterSchema } from "@/schemas"
import { z } from "zod"
import bcryptjs from "bcryptjs"

const RegisterAction = async (values: z.infer<typeof RegisterSchema>) => {
    const validated = RegisterSchema.safeParse(values)

    if(validated.success){
        const { name, email, password } = validated.data

        // fetch user if exist

        const existingEmail = await getUserByEmail(email)
        const existingUsername = await getUserByUsername(name)

        if(existingEmail){
            return {error: "Email already exists"}
        }

        if(existingUsername){
            return {error: "Username already exists"}
        }

        const hashedPassword = await bcryptjs.hash(password, 10)
        await db.user.create({
            data: {
                name,
                email,
                password:hashedPassword,
                usermetas: {
                    create: [
                        {username: name}
                    ]
                }
            }
        })
        return {success: "User created"}

    }
}

export default RegisterAction