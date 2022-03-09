import FormInput from 'infrastructure/components/FormInput';
import FormRadio from 'infrastructure/components/FormRadio';
import useForm from './useForm/useForm';
import S from './home.module.css';

const Home = () => {
  const { values, inputs, radios, canSubmit, handleSubmit, handleChange } = useForm();

  return (
    <div className={`${S.app}`}>
      <form onSubmit={handleSubmit} autoComplete='off'>
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
        <FormRadio
          legend='What is your employment status?'
          radios={radios}
          handleChange={handleChange}
          stateValue={values}
        />
        <button disabled={canSubmit}>send</button>
      </form>
    </div>
  );
};

export default Home;
