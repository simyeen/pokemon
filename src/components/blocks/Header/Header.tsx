import React from 'react';
import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';

interface HeaderProps {
  handleClick: () => void;
}

const Header = ({ handleClick }: HeaderProps) => {
  return (
    <div className='flex justify-between bg-yellow-300 py-2 px-4'>
      <Logo />
      <Button title='Logout' onClick={handleClick} className='' />
    </div>
  );
};

export default Header;
