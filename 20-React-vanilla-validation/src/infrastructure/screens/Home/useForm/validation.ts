interface IValidation {
  username: string;
  email: string;
  birthday: string;
  password: string;
  confirmPassword: string;
  reciveInformation: string;
  employment: string;
}

const validation = (props: IValidation) => {
  const errors = {
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
    reciveInformation: '',
    employment: '',
  };

  //Validation for username
  if (!props.username.trim()) {
    errors.username = 'This field is required';
  } else if (
    props.username.trim() &&
    !/^[A-Za-z0-9]{3,16}$/.test(props.username.trim())
  ) {
    errors.username =
      'Username should be 3-16 characters and should´t include any special character!';
  } else {
    errors.username = '';
  }

  //Validation for email
  if (!props.email.trim()) {
    errors.email = 'This field is required';
  } else if (
    props.email.trim() &&
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(props.email.trim())
  ) {
    errors.email = 'Email should be a valid email adress';
  } else {
    errors.email = '';
  }

  //Validation for password
  if (!props.password.trim()) {
    errors.password = 'This field is required';
  } else if (
    props.password.trim() &&
    !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*-.])[a-zA-Z0-9!@#$%^&*-.]{8,20}$/.test(
      props.password.trim()
    )
  ) {
    errors.password =
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character';
  } else {
    errors.password = '';
  }

  //Validation for confirmPwassword
  if (!props.confirmPassword.trim()) {
    errors.confirmPassword = 'This field is required';
  } else if (props.confirmPassword.trim() && props.confirmPassword !== props.password) {
    errors.confirmPassword = 'Password don´t match';
  } else {
    errors.confirmPassword = '';
  }

  //Validation for reciveInformation
  if (!props.reciveInformation) {
    errors.reciveInformation = 'You need to accept this to continue';
  } else {
    errors.reciveInformation = '';
  }

  //Validation for reciveInformation
  if (!props.employment) {
    errors.employment = 'required';
  } else {
    errors.employment = '';
  }

  return errors;
};

export default validation;
