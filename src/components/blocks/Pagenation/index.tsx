import React, { useEffect } from 'react';
import Pagenation from './Pagenation';

import { useCommonStore, usePokemonStore } from '../../../store/useStore';
import { usePokemonList } from '../../../api/pokemon/qurey';

import { DEFAULT_LENGTH } from '../../../constant/common';

const Index = () => {
  const {
    setPokemons,
    searchTerm,
    currentPage,
    setPage,
    totalPages,
    setTotalPages,
  } = usePokemonStore();

  const { region } = useCommonStore();

  // React Query로 데이터 가져오기 (keepPreviousData 사용)
  const { data } = usePokemonList(
    DEFAULT_LENGTH,
    (currentPage - 1) * DEFAULT_LENGTH
  );

  // 페이지네이션 데이터 처리 + !search 일 때
  useEffect(() => {
    if (data && !searchTerm && region === 'All') {
      const _pokemons = data.results;
      const _totalPage = Math.ceil(data.count / DEFAULT_LENGTH);
      setPokemons(_pokemons);
      setTotalPages(_totalPage);
    }
  }, [data, setPokemons, searchTerm]);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber); // Zustand의 setPage로 페이지 변경
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1); // Zustand의 currentPage 사용
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1); // Zustand의 currentPage 사용
    }
  };

  return (
    <div>
      <Pagenation
        currentPage={currentPage} // Zustand의 currentPage 사용
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPreviosChange={handlePrevious}
        onNextChange={handleNext}
      />
    </div>
  );
};

export default Index;
