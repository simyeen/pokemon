import { useQueries, useQuery } from '@tanstack/react-query';
import {
  fetchPokemonList,
  fetchPokemonByUrl,
  fetchPokemonTypes,
  fetchPokemonById,
  fetchPokemonByName,
  fetchPokemonByRegion,
  fetchPokemonSpecies,
  fetchPokemonEvolutionChain,
} from './fetch';
import { QUERY_KEYS } from './key'; // 키 모듈 가져오기
import { Pokemon } from '@/type/react-query';

// 1. 포켓몬 리스트 가져오기 (useQuery 사용)
export const usePokemonList = (limit: number, offset: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_LIST, limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
    enabled: true, // 쿼리 사용 가능
  });
};

// 2. 개별 포켓몬 정보 가져오기 (URL 사용)
export const usePokemonDetail = (url: string) => {
  console.log('배열호출');
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_DETAILS, url],
    queryFn: () => fetchPokemonByUrl(url),
    enabled: !!url, // url이 존재할 때만 호출
  });
};

export const usePokemonDetails = (list: []) => {
  return useQueries({
    queries: list.map(({ url }) => ({
      queryKey: [QUERY_KEYS.POKEMON_DETAILS + '배열', url],
      queryFn: () => fetchPokemonByUrl(url),
      enabled: !!url, // url이 존재할 때만
    })),
  });
};

// 3. 포켓몬 타입으로 가져오기
export const usePokemonByType = (typeId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_TYPE, typeId],
    queryFn: () => fetchPokemonTypes(typeId),
    enabled: !!typeId, // typeId가 있을 때만 호출
  });
};

// 4. 포켓몬 ID로 가져오기
export const usePokemonById = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_BY_ID, id],
    queryFn: () => fetchPokemonById(id),
    // enabled: id !== 0 && id !== null, // id가 있을 때만 호출
    enabled: id > 0,
  });
};

// 5. 포켓몬 이름으로 가져오기
export const usePokemonByName = (name: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_BY_NAME, name],
    queryFn: () => fetchPokemonByName(name),
    enabled: !!name, // name이 있을 때만 호출
  });
};

// 6. 지역명으로 포켓몬 가져오기
export const usePokemonByRegion = (regionId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_BY_REGION, regionId],
    queryFn: () => fetchPokemonByRegion(regionId),
    enabled: !!regionId, // regionId가 있을 때만 호출
  });
};

// 7. 종으로 가져오기
export const usePokemonSpecies = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_SPECIES, id],
    queryFn: () => fetchPokemonSpecies(id),
    enabled: !!id, // id가 있을 때만 실행
  });
};

// 8. 진화 체인 가져오기
export const usePokemonEvolutionChain = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_EVOLUTION_CHAIN, id],
    queryFn: () => fetchPokemonEvolutionChain(id),
    enabled: !!id,
  });
};
