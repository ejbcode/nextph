import React, { useState, useEffect } from "react";

const useValidation = (initialState, validate, fn) => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(error).length === 0;
      console.log(noErrors);

      if (noErrors) {
        fn();
      }
      setSubmitForm(false);
    }
  }, [error]);

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(value);
    setError(validationErrors);
    setSubmitForm(true);
  };

  return {
    value,
    error,
    submitForm,
    handleSubmit,
    handleChange,
  };
};

export default useValidation;
