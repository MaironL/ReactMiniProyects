import { useState } from 'react';
import S from './formInput.module.css';

interface IFormInput {
  id: number;
  name: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  label: string;
  value: string | number;
  errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: IFormInput) => {
  const [focused, setFocused] = useState(false);
  const { label, handleChange, id, errorMessage, ...inputProps } = props;

  const handleFocusedBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocused(true);
  };
  const handleFocusedFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    inputProps.name === 'confirmPassword' && setFocused(true);
  };

  return (
    <div className={`${S.formInput}`}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={handleChange}
        onBlur={handleFocusedBlur}
        onFocus={handleFocusedFocus}
        data-focused={errorMessage && focused}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
