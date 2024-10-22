import { create } from 'zustand';
import { Pokemon } from '../type/react-query';

interface PokemonStore {
  pokemons: Pokemon[];
  pokemonDetailList: [];
  searchTerm: string;
  currentPage: number;
  totalPages: number;
  setTotalPages: (page: number) => void;
  setPokemons: (pokemons: Pokemon[]) => void;
  setSearchTerm: (term: string) => void;
  setPage: (page: number) => void;
}

interface CommonStore {
  region: string;
  setRegion: (newRegion: string) => void;
}

// store 분리 필요.
export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],
  pokemonDetailList: [],
  searchTerm: '',
  currentPage: 1,
  totalPages: 10,
  setTotalPages: (pages) => set({ totalPages: pages }),
  setPokemons: (pokemons) => set({ pokemons }),
  setPokemonDetailList: (details) => set({ pokemonDetailList: details }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setPage: (page) => set({ currentPage: page }),
}));

export const useCommonStore = create<CommonStore>((set) => ({
  region: 'All',
  setRegion: (newRegion) => set({ region: newRegion }),
}));
