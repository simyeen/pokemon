import React, { useEffect } from 'react';
import RegionFilter from './RegionFilter';
import { useCommonStore, usePokemonStore } from '../../../store/useStore';
import { usePokemonByRegion } from '../../../api/pokemon/qurey';
import { DEFAULT_LENGTH } from '../../../constant/common';
import { POKEMON_REGION_IDS } from '../../../constant/param';

const Index = () => {
  const {
    setPokemons,
    currentPage,
    setTotalPages,
    setPage,
    searchTerm,
    setSearchTerm,
  } = usePokemonStore();
  const { region, setRegion } = useCommonStore();

  // region명에 따라 id 값으로 변환
  const regionId = POKEMON_REGION_IDS[region.toLowerCase()];

  // regionId에 따라 포켓몬 데이터를 가져옴
  const { data, isLoading, isError } = usePokemonByRegion(regionId);

  useEffect(() => {
    if (data) {
      // 데이터에서 pokemon_entries 추출하여 필요한 형태로 변환
      const _pokemonEntries = data.pokemon_entries.map((entry) => ({
        name: entry.pokemon_species.name,
        url: entry.pokemon_species.url.replace('pokemon-species', 'pokemon'),
      }));

      const _totalPage = Math.ceil(_pokemonEntries.length / DEFAULT_LENGTH);

      const startIndex = (currentPage - 1) * 12;
      const endIndex = startIndex + 12;
      const paginatedPokemons = _pokemonEntries.slice(startIndex, endIndex);

      setTotalPages(_totalPage);
      setPokemons(paginatedPokemons);
    }
  }, [data, setPokemons, currentPage]);

  const handleRegionChange = (newRegion: string) => {
    console.log('newRegion', newRegion);
    setPage(1);
    setRegion(newRegion); // region 상태 업데이트
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data...</div>;

  return <RegionFilter {...{ region }} {...{ handleRegionChange }} />;
};

export default Index;
