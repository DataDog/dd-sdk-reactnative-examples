export type Cart = {
  products: Record<string, CartProduct>;
};

export type CartProduct = {
  id: string;
  cover: string;
  name: string;
  isInStock: boolean;
  price: string;
  quantity: number;
};
