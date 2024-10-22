// types 배열: 포켓몬 타입과 해당 ID들
export const POKEMON_TYPES = {
  normal: 1,
  fighting: 2,
  flying: 3,
  poison: 4,
  ground: 5,
  rock: 6,
  bug: 7,
  ghost: 8,
  steel: 9,
  fire: 10,
  water: 11,
  grass: 12,
  electric: 13,
  psychic: 14,
  ice: 15,
  dragon: 16,
  dark: 17,
  fairy: 18,
};

// ts기능 as const 기능 사용하기
export const POKEMON_TYPE_CLASSES = {
  normal: 'bg-gray-300 text-gray-800 ring-gray-400',
  fighting: 'bg-red-600 text-white ring-red-600',
  flying: 'bg-blue-300 text-blue-800 ring-blue-400',
  poison: 'bg-purple-600 text-white ring-purple-600',
  ground: 'bg-yellow-600 text-white ring-yellow-600',
  rock: 'bg-yellow-700 text-white ring-yellow-700',
  bug: 'bg-green-400 text-green-900 ring-green-500',
  ghost: 'bg-purple-800 text-white ring-purple-800',
  steel: 'bg-gray-500 text-white ring-gray-500',
  fire: 'bg-red-500 text-white ring-red-500',
  water: 'bg-blue-500 text-white ring-blue-500',
  grass: 'bg-green-500 text-white ring-green-500',
  electric: 'bg-yellow-400 text-yellow-900 ring-yellow-400',
  psychic: 'bg-pink-500 text-white ring-pink-500',
  ice: 'bg-blue-200 text-blue-900 ring-blue-300',
  dragon: 'bg-indigo-700 text-white ring-indigo-700',
  dark: 'bg-gray-700 text-white ring-gray-700',
  fairy: 'bg-pink-200 text-pink-900 ring-pink-300',
} as const;

export const POKEMON_REGION_IDS = {
  all: null,
  kanto: 2,
  johto: 7,
  hoenn: 15,
  sinnoh: 6,
  unova: 9,
  kalos: 12,
  alola: 21,
};
