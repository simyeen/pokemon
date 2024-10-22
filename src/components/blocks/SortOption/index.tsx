import { useState } from 'react';
import { usePokemonStore } from '@/store/useStore';

import SortOption from './SortOption';

const options = [
  { id: 1, title: 'Lowest Number' },
  { id: 2, title: 'Highest Number' },
  { id: 3, title: 'A-Z' },
  { id: 4, title: 'Z-A' },
];

const Index = () => {
  const { pokemons, setPokemons } = usePokemonStore();
  const [selectedSort, setSelectedSort] = useState(options[0]);

  const handleMenuItemClick = (sortOption) => {
    setSelectedSort(sortOption); // 부모 컴포넌트의 상태 업데이트

    console.log('sortOption', sortOption);
    let sortedPokemons = [...pokemons]; // 기존 포켓몬 배열 복사

    switch (sortOption) {
      case 'Lowest Number':
        sortedPokemons = sortedPokemons.sort((a, b) => a.id - b.id);
        break;
      case 'Highest Number':
        sortedPokemons = sortedPokemons.sort((a, b) => b.id - a.id);
        break;
      case 'A-Z':
        sortedPokemons = sortedPokemons.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case 'Z-A':
        sortedPokemons = sortedPokemons.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
      default:
        break;
    }

    console.log('sortedPokemons', sortedPokemons);

    setPokemons(sortedPokemons); // 정렬된 포켓몬 목록 업데이트
  };

  return (
    <SortOption
      {...{ options }}
      {...{ selectedSort }}
      {...{ handleMenuItemClick }}
    />
  );
};

export default Index;
