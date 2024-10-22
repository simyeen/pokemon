import { QueryState, Pokemon } from '../../../type/react-query';

import Header from '../../blocks/Header';
import Category from '../../blocks/Category';
import Search from '../../blocks/Search';
import Tag from '../../blocks/Tag';
import PoketmonCard from '../../blocks/PoketmonCard';
import Pagenation from '../../blocks/Pagenation';
import RegionFilter from '../../blocks/RegionFilter';

import SortOption from '@components/blocks/SortOption';

interface HomeProps extends QueryState<Pokemon[]> {
  pokemons: Pokemon[];
}

const Home = ({ isLoading, isError, pokemons, error }: HomeProps) => {
  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  if (isError) {
    alert('에러가 발생했습니다.');
    console.log('error: ', error);
    return null;
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div id='category-wrapper' className='p-4'>
        <Category />
      </div>

      <div id='container' className='px-32 py-4'>
        <div className='pb-4'>
          <div className='py-4'>
            <Search />
          </div>
          <div className='flex gap-4'>
            <Tag />
          </div>
        </div>

        <div className='flex justify-between gap-4'>
          <RegionFilter /> <SortOption />
        </div>

        <div className='py-12'>
          <ul
            role='list'
            className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          >
            {pokemons.map((pokemon) => (
              <PoketmonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </ul>
        </div>

        <Pagenation />
      </div>
    </div>
  );
};

export default Home;
