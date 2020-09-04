import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../firebase";

import { useContext } from "react";

const NavStyled = styled.nav`
  ul {
    display: flex;
    li {
      margin: 0.8rem;
    }
  }
  a {
    color: var(--gray2);
    font-size: 1.8rem;
  }
`;

const Nav = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <NavStyled>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/populars">Popular</Link>
        </li>
        {user && (
          <li>
            <Link href="/newproduct">New Product</Link>
          </li>
        )}
      </ul>
    </NavStyled>
  );
};

export default Nav;
