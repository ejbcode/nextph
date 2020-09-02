import Layout from "../components/Layout";
import { Form, Field, InputSubmit } from "../components/ui/Form";
import { css } from "@emotion/core";
import useValidation from "../hooks/useValidation";
import createAccountValidate from "../validate/createAccountValidate";
const initialState = {
  name: "",
  email: "",
  password: "",
};

const CreateAccount = () => {
  const {
    value,
    error,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidation(initialState, createAccountValidate, createAccountFunction);
  const { name, email, password } = value;

  function createAccountFunction() {
    console.log("sdsd");
  }

  return (
    <>
      <Layout>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >
          CreateAccount
        </h1>
        <Form onSubmit={handleSubmit}>
          <Field>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              name="name"
            />
          </Field>
          <Field>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              placeholder="Name"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </Field>
          <Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              vale={password}
              name="password"
              onChange={handleChange}
            />
          </Field>
          <InputSubmit type="submit" value="Create an Account" />
        </Form>
      </Layout>
    </>
  );
};

export default CreateAccount;
