import {create} from 'zustand';
import {Product} from '../api/products';
import {Cart} from '../Interfaces/interface';

type State = Cart & {
  addProduct: (product: Product) => void;
};

export const useCart = create<State>(set => ({
  products: {},
  addProduct: (product: Product) =>
    set(state => {
      if (state.products[product.id]) {
        return {
          products: {
            ...state.products,
            [product.id]: {
              ...state.products[product.id],
              quantity: state.products[product.id].quantity + 1,
            },
          },
        };
      }
      return {
        products: {
          ...state.products,
          [product.id]: {
            ...product,
            quantity: 1,
          },
        },
      };
    }),
}));
