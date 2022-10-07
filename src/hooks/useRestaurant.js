import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const searchRestaurant = async (id) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get(`/${id}`);
      setResults({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: 'Something went wrong',
      });
    }
  };
  return [results, searchRestaurant];
};
