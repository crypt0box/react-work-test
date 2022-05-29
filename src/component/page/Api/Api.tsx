import axios from 'axios';
import { useEffect } from 'react';

export const Api = () => {
  const fetch = async () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/25');
  };
  useEffect(() => {
    (async () => {
      try {
        const ans = await fetch();
        console.log('ans:', ans);
      } catch (err) {
        console.error('try catch', err);
      }
    })();
  }, []);
  return <h2>Api</h2>;
};
