import FormInput from 'infrastructure/components/FormInput';
import FormRadio from 'infrastructure/components/FormRadio';
import useForm from './useForm/useForm';
import S from './home.module.css';

const Home = () => {
  const { values, errors, radios, disableSubmit, handleSubmit, handleChange } = useForm();

  return (
    <div className={`${S.app}`}>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <h1>Js Val</h1>
        <FormInput
          id='1'
          name='username'
          label='Username'
          type='text'
          placeholder='Username'
          errorMessage={errors.username}
          onChange={handleChange}
          value={values.username}
          required={true}
        />
        <FormInput
          id='2'
          name='email'
          label='Email'
          type='email'
          placeholder='Email'
          errorMessage={errors.email}
          onChange={handleChange}
          value={values.email}
          required={true}
        />
        <FormInput
          id='3'
          name='birthday'
          label='Birthday'
          type='date'
          placeholder='Birthday'
          errorMessage={errors.birthday}
          onChange={handleChange}
          value={values.birthday}
          required={true}
        />
        <FormInput
          id='4'
          name='password'
          label='Password'
          type='password'
          placeholder='Password'
          errorMessage={errors.password}
          onChange={handleChange}
          value={values.password}
          required={true}
        />
        <FormInput
          id='5'
          name='confirmPassword'
          label='Confirm Password'
          type='password'
          placeholder='Confirm Password'
          errorMessage={errors.confirmPassword}
          onChange={handleChange}
          value={values.confirmPassword}
          required={true}
        />
        <FormInput
          id='6'
          name='reciveInformation'
          label='Recive Information'
          type='checkbox'
          errorMessage={errors.reciveInformation}
          onChange={handleChange}
          value={values.reciveInformation}
          required={true}
        />
        <FormRadio
          legend='What is your employment status?'
          radios={radios}
          handleChange={handleChange}
          value={values.employment}
          errorMessage={errors.employment}
        />
        <button disabled={disableSubmit}>send</button>
      </form>
    </div>
  );
};

export default Home;
