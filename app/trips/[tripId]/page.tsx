
export default async function TripDetail({
    params,
} : {
    params : Promise <{ tripId: string }>;
}) {
    const {tripId} = await params
}