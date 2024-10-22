import React from 'react';
import Header from './Header';

const index = () => {
  const handleClick = (): void => {
    alert('로그아웃입니다');
  };

  return <Header {...{ handleClick }} />;
};

export default index;
