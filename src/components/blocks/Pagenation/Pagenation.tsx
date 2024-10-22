import React from 'react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPreviosChange: () => void;
  onNextChange: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPreviosChange,
  onNextChange,
}: PaginationProps) {
  // 보여줄 최대 페이지 수
  const maxPageDisplay = 10;

  // 페이지네이션 범위를 설정 (현재 페이지를 기준으로)
  const startPage = Math.max(currentPage - Math.floor(maxPageDisplay / 2), 1);
  const endPage = Math.min(startPage + maxPageDisplay - 1, totalPages);

  return (
    <nav className='flex items-center justify-between border-t border-gray-200 px-4 sm:px-0'>
      <div className='-mt-px flex w-0 flex-1'>
        <a
          href='#'
          className='inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
          onClick={onPreviosChange}
        >
          <ArrowLongLeftIcon
            aria-hidden='true'
            className='mr-3 h-5 w-5 text-gray-400'
          />
          Previous
        </a>
      </div>
      <div className='hidden md:-mt-px md:flex'>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, index) => startPage + index
        ).map((page) => (
          <a
            key={page}
            href='#'
            className={`inline-flex items-center border-t-2 ${
              page === currentPage
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } px-4 pt-4 text-sm font-medium`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        ))}
      </div>
      <div className='-mt-px flex w-0 flex-1 justify-end'>
        <a
          href='#'
          className='inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
          onClick={onNextChange}
        >
          Next
          <ArrowLongRightIcon
            aria-hidden='true'
            className='ml-3 h-5 w-5 text-gray-400'
          />
        </a>
      </div>
    </nav>
  );
}
