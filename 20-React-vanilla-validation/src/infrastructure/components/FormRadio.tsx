import React from 'react';
import S from './formRadio.module.css';

interface IFormRadio {
  legend: string;
  radios: { name: string; id: string; radioValue: string; label: string }[];
  errorMessage: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRadio = ({ legend, radios, handleChange, value, errorMessage }: IFormRadio) => {
  return (
    <>
      <fieldset className={`${S.formInput}`}>
        <legend>{legend}</legend>
        {radios.map((radio) => {
          const { id, name, radioValue, label } = radio;
          return (
            <div key={id}>
              <input
                type='radio'
                id={id.toString()}
                name={name}
                value={radioValue}
                checked={value === radioValue}
                onChange={handleChange}
              />
              <label htmlFor={id.toString()}>{label}</label>
              <br />
            </div>
          );
        })}
      </fieldset>
      <span>{errorMessage}</span>
    </>
  );
};

export default FormRadio;
