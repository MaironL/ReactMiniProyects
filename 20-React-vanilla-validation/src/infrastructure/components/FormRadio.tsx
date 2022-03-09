import React from 'react';
import S from './formRadio.module.css';

interface IFormRadio {
  legend: string;
  radios: {
    errorMessage: string;
    items: {
      id: string;
      name: string;
      value: string;
      label: string;
    }[];
  };
  stateValue: {
    username: string;
    email: string;
    birthday: string;
    password: string;
    confirmPassword: string;
    reciveInformation: string;
    employment: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRadio = ({ legend, radios, handleChange, stateValue }: IFormRadio) => {
  return (
    <>
      <fieldset className={`${S.formInput}`}>
        <legend>{legend}</legend>
        {radios.items.map((radio) => {
          const { id, name, value, label } = radio;
          return (
            <div key={id}>
              <input
                type='radio'
                id={id.toString()}
                name={name}
                value={value}
                checked={stateValue.employment === radio.value}
                onChange={handleChange}
              />
              <label htmlFor={id.toString()}>{label}</label>
              <br />
            </div>
          );
        })}
      </fieldset>
      <span>{radios.errorMessage}</span>
    </>
  );
};

export default FormRadio;
