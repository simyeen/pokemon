import { POKEMON_TYPE_CLASSES } from '../../../constant/param';

export default function PoketmonCard({ data, handleClick }) {
  return (
    <li
      key={data.name}
      className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex flex-1 flex-col p-8'>
        <p>No. {data.id}</p>
        <img
          alt=''
          src={data.sprites.front_default}
          className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
        />
        <h3 className='mt-6 text-sm font-medium text-gray-900'>{data.name}</h3>
        <dl className='mt-1 flex flex-grow flex-col justify-between'>
          <dd className='mt-3'>
            {data.types.map((el) => {
              const typeClass = POKEMON_TYPE_CLASSES[el.type.name]; // 타입에 맞는 클래스명 가져오기
              return (
                <span
                  key={el.type.name}
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium mr-1 ring-1 ring-inset ${typeClass}`}
                >
                  {el.type.name}
                </span>
              );
            })}
          </dd>
        </dl>
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='flex w-0 flex-1'>
            <a className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'>
              <div>
                <p> Height </p>
                <p> {data.height / 10}m </p>
              </div>
            </a>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <a className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'>
              <div>
                <p> Weight </p>
                <p> {data.weight / 10}kg </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
