import { usePokemonStore } from '../../../store/useStore';
import Tag from './Tag';

const Index = () => {
  const { pokemons, searchTerm, currentPage, setPokemons, setPage } =
    usePokemonStore();

  return <Tag {...{ searchTerm }} />;
};

export default Index;
