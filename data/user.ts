import { db } from "@/libs/db"

export const getUserByEmail = async (email: string) => {
    try{
        return await db.user.findFirst({
            where: {
                email
            }
        })
    }catch (error) {
        console.log(error);
        throw error
    }
}

export const getUserByUsername = async (name: string) => {
    return await db.user.findFirst({
        where: {
            name
        }
    })
}

export const getUserMetaData = async (id: string) => {
    try{
        return await db.userMeta.findFirst({
            where: {
                userId:id
            }
        })
    }catch(error){
        console.log(error);
        throw error
    }
}