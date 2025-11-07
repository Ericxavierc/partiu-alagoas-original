export interface Tour {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  isPromo: boolean;
  category: string;
  discount?: string;
}

export interface Category {
  name: string;
  tours: Tour[];
}

export interface CartItem {
  tour: Tour;
  quantity: number;
  observation: string;
}
