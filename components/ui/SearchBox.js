import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const InputText = styled.input`
  border: 1px solid var(--gray3);
  padding: 1rem;
  min-width: 300px;
`;

const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 2.6rem;
  background-image: url("/static/img/find.png");
  background-repeat: no-repeat;
  position: absolute;
  background-color: transparent;
  border: none;
  top: 0.7rem;
  right: 0;

  :hover {
    cursor: pointer;
  }
`;

const SearchBox = () => {
  return (
    <form
      css={css`
        position: relative;
      `}
    >
      <InputText type="text" placeholder="Find Products" />
      <InputSubmit type="submit"></InputSubmit>
    </form>
  );
};

export default SearchBox;
