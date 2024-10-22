import Button from '../../atoms/Button';

const Search = ({ searchTerm, handleSearch, handleInputChange }) => {
  return (
    <form
      id='search-form'
      className=' flex justify-between gap-4'
      onSubmit={handleSearch}
    >
      <label htmlFor='pokemon' className='sr-only'>
        Pokemon
      </label>
      <input
        id='pokemon'
        name='pokemon'
        type='pokemon'
        placeholder='포켓몬 번호, 이름, 타입 중 하나를 입력하세요.'
        value={searchTerm}
        onChange={handleInputChange}
        className='block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
      <Button title='Search' className='bg-blue-700' />
    </form>
  );
};

export default Search;
