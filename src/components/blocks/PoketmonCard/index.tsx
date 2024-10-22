import { useNavigate } from 'react-router-dom'; // useNavigate import
import PoketmonCard from './PoketmonCard';
import { Pokemon } from '../../../type/react-query';
import { usePokemonDetail } from '../../../api/pokemon/qurey';

interface IndexProps {
  pokemon: Pokemon;
}

const Index = ({ pokemon }: IndexProps) => {
  const { data, isLoading, isError, error } = usePokemonDetail(pokemon.url);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 렌더링 이슈
  if (isError) {
    alert('에러가 발생했습니다.');
    console.log('error: ', error);
    return null;
  }

  const handleClick = () => {
    navigate(`/detail/${data.id}`);
  };

  return <PoketmonCard {...{ data }} {...{ handleClick }} />;
};

export default Index;
