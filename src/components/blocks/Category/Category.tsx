import React from 'react';
import { CATEGORIES } from '../../../constant/home-page';

const Category = () => {
  return (
    <div className='flex  justify-center gap-4'>
      {CATEGORIES.map((CATEGORY) => (
        <div key={CATEGORY.id} className='bg-gray-500 py-4 px-8 cursor-pointer'>
          <p className='text-white'>{CATEGORY.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
