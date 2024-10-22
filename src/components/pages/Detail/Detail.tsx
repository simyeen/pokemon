'use client';

import { extractEvolutionPaths } from '@/utils/extractEvolutionPaths';
import EvolutionTree from './EvolutionTree';

export default function Detail({ data, speciesData, evolutionData }) {
  const { id, name, sprites } = data;
  const chain = extractEvolutionPaths(evolutionData.chain);

  const description = speciesData.flavor_text_entries.find(
    (entry) => entry.language.name === 'en'
  );

  console.log('speciesData', speciesData);

  console.log('evolutionData: ', evolutionData, evolutionData.chain);

  return (
    <div className='bg-white'>
      <div className='flex justify-between bg-slate-400'>
        <div className='flex gap-2'>
          <span>사진</span>
          <span>이름</span>
          <span>넘버</span>
        </div>
        <div className='flex flex-row-reverse gap-2'>
          <span>사진</span>
          <span>이름</span>
          <span>넘버</span>
        </div>
      </div>
      <div className='py-16'>
        <div className='flex'>
          <img
            className='w-48 h-48'
            src={sprites.front_default}
            alt='포켓몬 이미지'
          />

          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <div className='flex gap-4'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                No.
              </h1>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                {name}
              </h1>
            </div>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-2xl tracking-tight text-gray-900'>
                포켓몬 설명
              </p>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>
              <div
                dangerouslySetInnerHTML={{ __html: description.flavor_text }}
                className='space-y-6 text-base text-gray-700'
              />
            </div>
          </div>
        </div>
        <div className='bg-slate-200 h-[2px]' />
        <div>
          진화도
          <div>
            <div className='flex flex-col space-y-6'>
              <EvolutionTree {...{ chain }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
