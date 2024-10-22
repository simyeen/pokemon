import { defaultAxios } from '..';
import { DEFAULT_LENGTH, DEFAULT_OFFSET } from '../../constant/common';

/**
 * @method GET
 * @description /pokemon
 * @returns {Promise<Array<Object>>}
 */
export const fetchPokemonList = async (
  limit = DEFAULT_LENGTH,
  offset = DEFAULT_OFFSET
) => {
  const response = await defaultAxios.get(`pokemon`, {
    params: { limit, offset },
  });

  return response.data;
};

/**
 * @method GET
 * @description /url
 * @returns {Promise<Object>}
 */
export const fetchPokemonByUrl = async (url: string) => {
  const response = await defaultAxios.get(url);
  return response.data;
};

/**
 * @method GET
 * @description /id
 * @returns {Promise<Array<Object>>} 해당 type에 해당하는 포켓몬 정보들 가져옴.
 */
export const fetchPokemonTypes = async (typeId: number) => {
  const response = await defaultAxios.get(`type/${typeId}`);
  return response.data;
};

/**
 * @method GET
 * @description /id
 * @returns {Promise<Object>}
 */
export const fetchPokemonById = async (id: number) => {
  const response = await defaultAxios.get(`pokemon/${id}`);
  console.log('fetchPokemonById 호출: ', id);
  return response.data;
};

/**
 * @method GET
 * @description /id
 * @returns {Promise<Object>}
 */
export const fetchPokemonByName = async (name: string) => {
  const response = await defaultAxios.get(`pokemon/${name}`);
  return response.data;
};

export const fetchPokemonByRegion = async (regionId: number) => {
  const response = await defaultAxios.get(`pokedex/${regionId}`);
  return response.data;
};

// 종 설명 가져오는 api
export const fetchPokemonSpecies = async (id: number) => {
  const response = await defaultAxios.get(`pokemon-species/${id}/`);
  return response.data;
};

export const fetchPokemonEvolutionChain = async (id: number) => {
  const response = await defaultAxios.get(`evolution-chain/${id}/`);
  return response.data;
};
