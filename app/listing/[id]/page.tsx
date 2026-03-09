import React from 'react';
import { MOCK_VEHICLES } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import { VehicleDetailsClient } from './VehicleDetailsClient';

export async function generateStaticParams() {
    return MOCK_VEHICLES.map((vehicle) => ({
        id: vehicle.id,
    }));
}

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const vehicle = MOCK_VEHICLES.find(v => v.id === id);

    if (!vehicle) {
        notFound();
    }

    return <VehicleDetailsClient vehicle={vehicle} />;
}
