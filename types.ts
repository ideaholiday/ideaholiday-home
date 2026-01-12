export enum UserRole {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  AGENT = 'AGENT',
  OPERATOR = 'OPERATOR',
  DISTRIBUTOR = 'DISTRIBUTOR'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  hotel?: string;
  meals: string[];
}

export interface Quote {
  id: string; // IH-XXXXX
  clientName: string;
  destination: string;
  travelDate: string;
  pax: number;
  status: 'Draft' | 'Sent' | 'Confirmed' | 'Completed';
  totalCost: number; // Base cost
  markup: number; // Agent margin
  sellingPrice: number; // Final price
  assignedTo?: string; // Operator ID
  staffId?: string;
  agentId?: string;
  itinerary: ItineraryDay[];
}

export interface Message {
  id: string;
  quoteId: string;
  senderId: string;
  senderName: string; // Real name
  senderRole: UserRole;
  content: string;
  timestamp: string;
  isAnonymous: boolean; // If true, hide name from Operator if sender is Agent
}

export interface Package {
  id: string;
  title: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  category: 'Domestic' | 'International' | 'Honeymoon' | 'Family';
}