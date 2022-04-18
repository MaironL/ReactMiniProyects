import { useState } from 'react';
import S from './formInput.module.css';

interface IFormInput {
  id: string;
  name: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  label: string;
  value: string | number;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: IFormInput) => {
  const { label, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

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
        onBlur={handleFocusedBlur}
        onFocus={handleFocusedFocus}
        data-focused={errorMessage && focused}
      />

      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
