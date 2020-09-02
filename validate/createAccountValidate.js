export default function createAccountValidate(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "the name field is empty";
  }

  if (!values.email) {
    errors.email = "The email field is empty";
  } else if (values.email == 0) {
    errors.email = "is not a valid email";
  }

  if (!values.password) {
    errors.password = "the password field is empty";
  } else if (values.email < 6) {
    errors.paswword = "Password must be at least 6 digits";
  }
  return errors;
}
