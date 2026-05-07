import { NextResponse } from 'next/server';

const mockFleet = [
  {
    _id: "1",
    name: "Mercedes-Benz S-Class",
    type: "Sedan",
    capacity: { passengers: 3, luggage: 2 },
    pricePerHour: 120,
    features: ["Leather Seats", "Free Wi-Fi", "Bottled Water"],
    imageUrl: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop",
    description: "The ultimate luxury sedan for executive travel."
  },
  {
    _id: "2",
    name: "Cadillac Escalade",
    type: "SUV",
    capacity: { passengers: 6, luggage: 6 },
    pricePerHour: 150,
    features: ["Extra Legroom", "Tinted Windows", "Climate Control"],
    imageUrl: "https://images.unsplash.com/photo-1563720225384-9c0f679246d8?q=80&w=2070&auto=format&fit=crop",
    description: "Spacious and imposing luxury SUV for groups."
  },
  {
    _id: "3",
    name: "Lincoln Stretch Limo",
    type: "Limo",
    capacity: { passengers: 8, luggage: 4 },
    pricePerHour: 200,
    features: ["Mini Bar", "Mood Lighting", "Privacy Partition"],
    imageUrl: "https://images.unsplash.com/photo-1549428587-8fbaf5c1f516?q=80&w=2070&auto=format&fit=crop",
    description: "Classic stretch limousine for special events."
  }
];

export async function GET() {
  return NextResponse.json(mockFleet);
}
