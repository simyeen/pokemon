// key.ts -> useQuery key 값으로 호출
// gctime -> cache 설정도 가능.

const POKEMON_KEYS = [
  'POKEMON_LIST',
  'POKEMON_DETAILS',
  'POKEMON_TYPE',
  'POKEMON_BY_ID',
  'POKEMON_BY_NAME',
  'POKEMON_BY_REGION',
  'POKEMON_SPECIES',
  'POKEMON_EVOLUTION_CHAIN',
] as const;

type KeyValueMatch<T extends readonly string[]> = {
  [K in T[number]]: K;
};

export const QUERY_KEYS = POKEMON_KEYS.reduce((acc, key) => {
  acc[key] = key;

  return acc;
}, {} as Record<string, string>) as KeyValueMatch<typeof POKEMON_KEYS>;
