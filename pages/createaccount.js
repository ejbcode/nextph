import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
import { css } from "@emotion/core";
import useValidation from "../hooks/useValidation";
import createAccountValidate from "../validate/createAccountValidate";
import firebase from "../firebase";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const CreateAccount = () => {
  const [errorMessage, setErrorMessage] = useState();

  const {
    value,
    error,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidation(initialState, createAccountValidate, createAccountFunction);

  const { name, email, password } = value;

  async function createAccountFunction() {
    try {
      await firebase.register(name, email, password);
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
          CreateAccount
        </h1>
        <Form onSubmit={handleSubmit} noValidate>
          {error.name && <Error> {error.name} </Error>}

          <Field>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </Field>
          {error.email && <Error> {error.email} </Error>}

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
          <InputSubmit type="submit" value="Create an Account" />
        </Form>
      </Layout>
    </>
  );
};

export default CreateAccount;
