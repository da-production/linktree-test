import { db } from "@/libs/db"

export const getUserByEmail = async (email: string) => {
    return await db.user.findFirst({
        where: {
            email
        }
    })
}

export const getUserByUsername = async (name: string) => {
    return await db.user.findFirst({
        where: {
            name
        }
    })
}