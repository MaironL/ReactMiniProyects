import { useEffect, useState } from 'react';
import validation from './validation';

const useForm = () => {
  //inputs state
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
    employment: '',
    reciveInformation: '',
  });

  //inputs errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
    employment: '',
    reciveInformation: '',
  });

  const [disableSubmit, setDisableSubmit] = useState(false);

  //The radios Buttons Items
  interface IRadio {
    name: string;
    id: string;
    radioValue: string;
    label: string;
  }

  const radios: IRadio[] = [
    {
      name: 'employment',
      id: 'unemployed',
      radioValue: 'unemployed',
      label: 'unemployed',
    },
    {
      name: 'employment',
      id: 'part-time',
      radioValue: 'part-time',
      label: 'part-time',
    },
    {
      name: 'employment',
      id: 'full-time',
      radioValue: 'full-time',
      label: 'full-time',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues((prevFormData) => {
      return { ...prevFormData, [name]: type === 'checkbox' ? checked : value };
    });
  };

  useEffect(() => {
    setErrors(validation(values));
  }, [values]);

  useEffect(() => {
    setDisableSubmit(Object.values(errors).some((error) => error !== ''));
  }, [errors]);

  return { values, errors, radios, disableSubmit, handleSubmit, handleChange };
};

export default useForm;
