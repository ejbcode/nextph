export default function createLogInValidate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "The email field is empty";
  } else if (values.email == 0) {
    errors.email = "is not a valid email";
  }

  if (!values.password) {
    errors.password = "the password field is empty";
  } else if (values.password < 6) {
    errors.password = "Password must be at least 6 digits";
  }
  return errors;
}
