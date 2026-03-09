export type VehicleType = 'Car' | 'Bike' | 'SUV';

export interface Vehicle {
    id: string;
    name: string;
    type: VehicleType;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    owner: string;
    location: string;
    features: string[];
    description: string;
}
