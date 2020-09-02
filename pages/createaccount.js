import Layout from "../components/Layout";
import { Form, Field, InputSubmit } from "../components/ui/Form";
import { css } from "@emotion/core";

const CreateAccount = () => {
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
        <Form>
          <Field>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </Field>
          <Field>
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="Name" />
          </Field>
          <Field>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </Field>
          <InputSubmit type="submit" value="Create an Account" />
        </Form>
      </Layout>
    </>
  );
};

export default CreateAccount;
