import styled from "@emotion/styled";

export const Form = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
`;

export const Field = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }

  input {
    flex: 1;
    padding: 1rem;
  }
`;

export const Error = styled.p`
  background-color: red;
  padding: 1rem;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;
  animation: 1s ease-in-out showMessageErrors;

  @keyframes showMessageErrors {
    from {
      opacity: 0;
      transform: translateX(-50%);
    }
    to {
      opacity: 1;
      transform: translateX(00%);
    }
  }
`;
export const InputSubmit = styled.input`
  background-color: var(--orange);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;
