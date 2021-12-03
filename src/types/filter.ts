import { Dispatch, SetStateAction } from 'react';

export type FilterArgs = {
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  location: {
      label: string;
  } | null;
  setLocation: Dispatch<SetStateAction<{
      label: string;
  } | null>>
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
};

export type FilterArgsNoSet = {
  price: string;
  location: {
      label: string;
  } | null;
  rating: number;
};
