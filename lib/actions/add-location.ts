"use server"

import { auth } from "@/auth"

async function geocodeAddress(address:string) {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY!;
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
         address
        )}&key=${apiKey}`
    );
}

export async function addLocation(formData:FormData, tripId: string) {

    const session = await auth()
    if (!session) {
        throw new Error("Not authenticated")
    }

    const address = formData.get("address")?.toString()
    if (!address) {
        throw new Error("Missing address");
    }


    
}