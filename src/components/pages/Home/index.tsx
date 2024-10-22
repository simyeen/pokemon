import Home from './Home';

import { usePokemonStore } from '../../../store/useStore';
import { DEFAULT_LENGTH, DEFAULT_OFFSET } from '../../../constant/common';
import { usePokemonList } from '../../../api/pokemon/qurey';

const Index = () => {
  const { pokemons } = usePokemonStore();
  const { isLoading, isError, error } = usePokemonList(
    DEFAULT_LENGTH,
    DEFAULT_OFFSET
  );

  return (
    <Home
      {...{ isLoading }}
      {...{ isError }}
      {...{ pokemons }}
      {...{ error }}
    />
  );
};

export default Index;
