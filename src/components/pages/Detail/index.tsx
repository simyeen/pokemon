import { useParams } from 'react-router-dom';
import Detail from './Detail';
import {
  usePokemonById,
  usePokemonDetail,
  usePokemonEvolutionChain,
  usePokemonSpecies,
} from '@/api/pokemon/qurey';

const Index = () => {
  const { id } = useParams(); // URL에서 id 값을 가져옴

  // 여러 쿼리로 포켓몬 데이터 불러오기
  const {
    data,
    isLoading: isLoadingById,
    isError: isErrorById,
    error: errorById,
  } = usePokemonById(parseInt(id));
  const {
    data: speciesData,
    isLoading: isLoadingBySpecies,
    isError: isErrorBySpecies,
    error: errorBySpecies,
  } = usePokemonSpecies(parseInt(id));
  const {
    data: evolutionData,
    isLoading: isLoadingEvolution,
    isError: isErrorEvolution,
    error: errorEvolution,
  } = usePokemonDetail(speciesData?.evolution_chain.url);
  // = usePokemonEvolutionChain(parseInt(id));

  // 통합 로딩 및 에러 상태 처리
  const isLoading = isLoadingById || isLoadingBySpecies || isLoadingEvolution;
  const isError = isErrorById || isErrorBySpecies || isErrorEvolution;
  const errors = [errorById, errorBySpecies, errorEvolution];

  // 로딩 중일 때 처리
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 에러 발생 시 처리
  if (isError) {
    return (
      <div>
        <p>Error occurred! See console for details.</p>
        {errors.forEach((err) => err && console.error(err))}
      </div>
    );
  }

  // 바로 Detail 컴포넌트로 데이터를 전달
  return (
    <Detail
      data={data}
      speciesData={speciesData}
      evolutionData={evolutionData}
    />
  );
};

export default Index;
