"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils";

export default function NewTrip() {
    return (
        <div className="max-w-lg mx-auto mt-10">
            <Card>
                <CardHeader>New Trip</CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <input type="text" 
                        name="title"
                        placeholder="Thailand trip..."
                        className={cn("w-full border border-gray-300 px-3 py-2","rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")}
                        />
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}