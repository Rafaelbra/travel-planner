
interface geocodeResult {
    country: string;
    formattedAddress: string;
}

export async function getCountryFromCoordinates(lat: number, lng: number): Promise<geocodeResult> {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );

    const data = await response.json()

    const result = data.result[0]
    const countryComponent = result.address_components.find((component: any) => component.types.includes("country"))
}