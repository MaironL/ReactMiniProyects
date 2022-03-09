import FormInput from 'infrastructure/components/FormInput';
import { useState } from 'react';
import S from './home.module.css';

const Home = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  interface Iinput {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
    label: string;
    pattern?: string;
    required?: boolean;
  }

  const inputs: Iinput[] = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        'Username should be 3-16 characters and should´t include any special character!',
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'it should be a valid email adress',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      errorMessage: '',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*-.])[a-zA-Z0-9!@#$%^&*-.]{8,20}$',
      label: 'Password',
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'ConfirmPassword',
      errorMessage: 'Password don´t match',
      pattern: values.password,
      label: 'ConfirmPassword',
      required: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className={`${S.app}`}>
      <form onSubmit={handleSubmit}>
        <h1>Js Val</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name as keyof typeof values]}
              handleChange={handleChange}
            />
          );
        })}
        <button>send</button>
      </form>
    </div>
  );
};

export default Home;
