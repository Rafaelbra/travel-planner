"use client"

import { Location } from "@prisma/client";
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

interface MapProps {
    itinenaries: Location[];
};

export default function Map({ itinenaries } : MapProps) {
    const  { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    });

    if (loadError) {
        return <div> Error loading maps</div>
    };

    if (!isLoaded) {
        return <div> Loading maps...</div>
    };

    const center = itinenaries.length > 0 
     ? {lat: itinenaries[0].lat, lng: itinenaries[0].lng} 
     : {lat: 0, lng: 0};

    return (
        <GoogleMap mapContainerStyle={{width: "100%", height: "100%"}} zoom={8} center={center} >
            {itinenaries.map((location, key) => (
                <Marker key={key} position={{lat: location.lat, lng: location.lng}} title={location.locationTitle} />
            ))}
        </GoogleMap>
    );
};