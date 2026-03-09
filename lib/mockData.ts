import { Vehicle } from '@/types/vehicle';

export const MOCK_VEHICLES: Vehicle[] = [
    {
        id: '1',
        name: 'Tesla Model 3',
        type: 'Car',
        price: 45,
        rating: 4.9,
        reviews: 128,
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
        owner: 'Alex Rivera',
        location: 'Downtown, SF',
        features: ['Autopilot', 'Premium Audio', 'Long Range'],
        description: 'Experience the future of driving with this pristine Tesla Model 3. Perfect for city trips or coastal drives.'
    },
    {
        id: '2',
        name: 'Audi Q7',
        type: 'SUV',
        price: 65,
        rating: 4.8,
        reviews: 85,
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
        owner: 'Sarah Chen',
        location: 'Mission District, SF',
        features: ['7 Seats', 'Quattro AWD', 'Panoramic Roof'],
        description: 'Spacious luxury for the whole family. The Audi Q7 offers unparalleled comfort and safety for your next group outing.'
    },
    {
        id: '3',
        name: 'BMW M4',
        type: 'Car',
        price: 85,
        rating: 4.9,
        reviews: 42,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
        owner: 'Marcus Thorne',
        location: 'Marina, SF',
        features: ['M-Performance', 'Heads-up Display', 'Sport Seats'],
        description: 'Pure driving pleasure. This M4 is meticulously maintained and ready for those who appreciate performance.'
    },
    {
        id: '4',
        name: 'Ducati Panigale',
        type: 'Bike',
        price: 55,
        rating: 5.0,
        reviews: 18,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800',
        owner: 'Leo Vance',
        location: 'SOMA, SF',
        features: ['Racing Exhaust', 'Quick Shifter', 'Carbon Fiber'],
        description: 'The ultimate Italian superbike. Not for the faint of heart. Professional gear required.'
    }
];
