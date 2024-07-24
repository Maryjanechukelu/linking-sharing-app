import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const baseStyle = "self-stretch bg-purple rounded-lg flex flex-col items-center justify-center py-[11px] px-[27px] text-base focus:outline-none focus:ring"
  const disabledStyle = 'bg-gray-400 text-gray-700 cursor-not-allowed';
  const enabledStyle = 'bg-blue-500 text-white hover:bg-blue-600';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${disabled ? disabledStyle : enabledStyle} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;