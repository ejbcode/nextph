import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
import { css } from "@emotion/core";
import useValidation from "../hooks/useValidation";
import createLogInValidate from "../validate/createLogInValidate";
import firebase from "../firebase";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();

  const {
    value,
    error,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidation(initialState, createLogInValidate, logInFunction);

  const { email, password } = value;

  async function logInFunction() {
    try {
      const user = await firebase.login(email, password);
      console.log(user);
      Router.push("/");
    } catch (error) {
      console.log("error", error.message);
      setErrorMessage(error.message);
    }
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
          Login
        </h1>
        <Form onSubmit={handleSubmit} noValidate>
          {error.name && <Error> {error.name} </Error>}

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
          {error.password && <Error> {error.password} </Error>}
          {errorMessage && <Error>{errorMessage}</Error>}

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
          <InputSubmit type="submit" value="Login" />
        </Form>
      </Layout>
    </>
  );
};

export default Login;
