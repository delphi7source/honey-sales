export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  deliveryInfo: DeliveryInfo;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface DeliveryInfo {
  address: string;
  city: string;
  postalCode: string;
  deliveryType: 'standard' | 'express' | 'pickup';
  deliveryDate?: Date;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;
  category: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  publishedAt: Date;
  category: string;
  tags: string[];
}