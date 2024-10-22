export default function EvolutionTree({ chain }) {
  // 중복된 첫 번째 포켓몬 찾기 (뿌리가 되는 포켓몬)
  const data = chain;
  const rootPokemon = data[0][0];

  const checkArray = [];

  return (
    <div className='bg-blue-300 flex justify-between w-1/2'>
      {/* 가지 */}

      <div className='flex items-center bg-slate-400'>{rootPokemon}</div>
      <div>
        {data.map((arr) => (
          <div className='flex justify-end'>
            {arr.map((el, i) => {
              if (checkArray.includes(el)) {
                return <></>;
              } else {
                checkArray.push(el);
                return <>{i !== 0 && <p className='p-2'>{el}</p>}</>;
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
