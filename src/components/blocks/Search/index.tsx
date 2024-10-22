import { useEffect, useState } from 'react';
import { usePokemonStore } from '../../../store/useStore';

import {
  usePokemonById,
  usePokemonByName,
  usePokemonByType,
} from '../../../api/pokemon/qurey';

import { POKEMON_TYPES } from '../../../constant/param';
import Search from './Search';
import { DEFAULT_LENGTH } from '../../../constant/common';

// 여기에서 문제가 발생함.
// 이미 선언한 순간부터

const Index = () => {
  const { setPokemons, currentPage, setTotalPages, searchTerm, setSearchTerm } =
    usePokemonStore();

  const { data: pokemonById, refetch: getPokemonById } = usePokemonById(
    parseInt(searchTerm)
  );
  const { data: pokemonByName, refetch: getPokemonByName } =
    usePokemonByName(searchTerm);

  const { data: pokemonByType, refetch: getPokemonByType } = usePokemonByType(
    POKEMON_TYPES[searchTerm.toLowerCase()]
  );

  // 검색 실행 핸들러
  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm === '') {
      console.log('노서치');
      return;
    }
    // 숫자인 경우 -> 포켓몬 ID로 검색
    if (!isNaN(Number(searchTerm))) {
      // getPokemonById();
      if (pokemonById) {
        const newUrl = pokemonById.location_area_encounters.replace(
          '/encounters',
          ''
        );
        setPokemons([{ name: pokemonById.name, url: newUrl }]);
      }
    }
    // 타입으로 검색
    if (POKEMON_TYPES[searchTerm.toLowerCase() as keyof typeof POKEMON_TYPES]) {
      // getPokemonByType();
      if (pokemonByType) {
        const _pokemonByType =
          pokemonByType?.pokemon.map((el) => el.pokemon) || [];
        const _totalPage = Math.ceil(_pokemonByType.length / DEFAULT_LENGTH);

        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        const paginatedPokemons = _pokemonByType.slice(startIndex, endIndex);

        setTotalPages(_totalPage);
        setPokemons(paginatedPokemons);
      }
    }
    // 이름으로 검색
    else {
      // getPokemonByName();
      if (pokemonByName) {
        const newUrl = pokemonByName.location_area_encounters.replace(
          '/encounters',
          ''
        );
        setPokemons([{ name: pokemonByName.name, url: newUrl }]);
      }
    }
  };

  // 페이지네이션에 따른 타입별 데이터 재호출
  useEffect(() => {
    if (POKEMON_TYPES[searchTerm.toLowerCase() as keyof typeof POKEMON_TYPES]) {
      const _pokemonByType =
        pokemonByType?.pokemon.map((el) => el.pokemon) || [];

      const startIndex = (currentPage - 1) * 12;
      const endIndex = startIndex + 12;
      const paginatedPokemons = _pokemonByType.slice(startIndex, endIndex);

      setPokemons(paginatedPokemons);
    }
  }, [currentPage]); // currentPage가 변경될 때마다 실행

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Search
      searchTerm={searchTerm}
      handleSearch={handleSearch}
      handleInputChange={handleInputChange}
    />
  );
};

export default Index;
