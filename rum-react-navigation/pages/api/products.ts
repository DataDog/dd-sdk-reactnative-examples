import {shopistApiHost} from '../../config/hosts.json';

export interface Product {
  id: string;
  cover: string;
  name: string;
  isInStock: boolean;
  price: string;
}

export const getProducts = async (categoryId: string): Promise<Product[]> => {
  const url = `https://${shopistApiHost}/category_${categoryId}.json`;
  const response = await fetch(url);
  return await response.json();
};
