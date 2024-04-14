export type Categories =
  | "smartphones"
  | "laptops"
  | "fragrances"
  | "skincare"
  | "groceries"
  | "home-decoration"
  | "furniture"
  | "tops"
  | "womens-dresses"
  | "womens-shoes"
  | "mens-shirts"
  | "mens-shoes"
  | "mens-watches"
  | "womens-watches"
  | "womens-bags"
  | "womens-jewellery"
  | "sunglasses"
  | "automotive"
  | "motorcycle"
  | "lighting";

export interface ProductDetails {
  id: Number;
  title: string;
  description: string;
  price: Number;
  discountPercentage: Number;
  rating: Number;
  stock: Number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ChartProps {
  products: any;
  categories: any;
  selectedProducts: any;
  runReportEnabled: any;
  loading: any;
  selectedCategory: any;
}

export interface FilterProps {
  categories: any;
  setCategories: any;
  selectedCategory: any;
  setSelectedCategory: any;
  products: any;
  setProducts: any;
  selectedProducts: any;
  setSelectedProducts: any;
  setRunReportEnabled: any;
  setLoading: any;
  runReportEnabled: any;
}
