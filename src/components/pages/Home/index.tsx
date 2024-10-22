import Home from './Home';

import { usePokemonStore } from '../../../store/useStore';
import { DEFAULT_LENGTH, DEFAULT_OFFSET } from '../../../constant/common';
import { usePokemonList } from '../../../api/pokemon/qurey';
import { useEffect } from 'react';

const Index = () => {
  const { pokemons, pokemonDetailList } = usePokemonStore();
  const { data, isLoading, isError, error } = usePokemonDetails(pokemons);

  useEffect(() => {
    if (data) {
      console.log('datadata: ', data);
    }
  }, []);

  return (
    <Home
      {...{ isLoading }}
      {...{ isError }}
      {...{ pokemonDetailList }}
      {...{ error }}
    />
  );
};

export default Index;
