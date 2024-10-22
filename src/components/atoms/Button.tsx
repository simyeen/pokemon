import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ title, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
