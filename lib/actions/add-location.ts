"use server"

import { auth } from "@/auth"

export async function addLocation(formData:FormData, tripId: string) {

    const session = await auth()
    if (!session) {
        throw new Error("Not authenticated")
    }


    
}