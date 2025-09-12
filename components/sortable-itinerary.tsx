import { Location } from "@prisma/client";
import {DndContext, closestCenter, DragEndEvent} from "@dnd-kit/core";
import {arrayMove, SortableContext, verticalListSortingStrategy, useSortable} from "@dnd-kit/sortable";
import { useId, useState } from "react";


interface SortableItinareryProps {
    locations: Location[],
    tripId: string;
}

function SortableItem({item}: {item: Location}) {
    return (
        <div className="p-4 border rounded-md justify-between items-center hover:shadow transition-shadow">
            {item.locationTitle}
        </div>
    )
}

export default function SortableItinerary({locations, tripId}: SortableItinareryProps) {
    const id = useId();
    const [localLocation, setLocalLocation] = useState(locations); 
    
    const handleDragEnd = async (event: DragEvent) => {

    };

    return (
        <DndContext id={id} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={localLocation.map((loc) => loc.id)} strategy={verticalListSortingStrategy}>
                <div className="space-y-4">
                    {localLocation.map((item, key) => (
                        <SortableItem key={key} item={item} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    )
}