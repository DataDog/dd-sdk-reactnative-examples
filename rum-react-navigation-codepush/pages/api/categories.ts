import {shopistApiHost} from '../../config/hosts.json';

export interface Category {
  id: string;
  cover: string;
  title: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const url = `https://${shopistApiHost}/categories.json`;
  const response = await fetch(url);
  return await response.json();
};
