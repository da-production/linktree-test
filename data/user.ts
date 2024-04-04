import { db } from "@/libs/db"

export const getUserByEmail = async (email: string) => {
    return await db.user.findFirst({
        where: {
            email
        }
    })
}