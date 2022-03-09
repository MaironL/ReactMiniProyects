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

  const [canSubmit, setCanSubmit] = useState(false);

  //The inputs Items (can be used for checkbox too)
  interface Iinput {
    id: number;
    name: string;
    type: string;
    placeholder?: string;
    errorMessage: string;
    label: string;
    required?: boolean;
  }
  const inputs: Iinput[] = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: errors.username,
      label: 'Username',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: errors.email,
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      errorMessage: errors.birthday,
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: errors.password,
      label: 'Password',
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: errors.confirmPassword,
      label: 'Confirm Password',
      required: true,
    },
    {
      id: 6,
      name: 'reciveInformation',
      type: 'checkbox',
      errorMessage: errors.reciveInformation,
      label: 'Recive Information',
      required: true,
    },
  ];

  //The radios Buttons Items
  interface IRadio {
    errorMessage: string;
    items: {
      id: string;
      name: string;
      value: string;
      label: string;
    }[];
  }
  const radios: IRadio = {
    errorMessage: errors.employment,
    items: [
      { name: 'employment', id: 'unemployed', value: 'unemployed', label: 'unemployed' },
      { name: 'employment', id: 'part-time', value: 'part-time', label: 'part-time' },
      { name: 'employment', id: 'full-time', value: 'full-time', label: 'full-time' },
    ],
  };

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
    console.log(values);
  }, [values]);

  useEffect(() => {
    setCanSubmit(Object.values(errors).some((error) => error !== ''));
  }, [errors]);

  return { values, inputs, radios, canSubmit, handleSubmit, handleChange };
};

export default useForm;
