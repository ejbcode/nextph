import Link from "next/link";
import styled from "@emotion/styled";

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
  return (
    <NavStyled>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/populars">Popular</Link>
        </li>
        <li>
          <Link href="/newproduct">New Product</Link>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
