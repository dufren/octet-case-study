import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  register?: any;
};

const Input: React.FC<InputProps> = (props) => {
  const { className, register, ...rest } = props;

  return (
    <input className={'custom-input ' + className} {...register} {...rest} />
  );
};

export default Input;
