import SearchBox from "./ui/SearchBox";
import Nav from "./Nav";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--orange);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto", serif;
  margin-right: 2rem;
`;
const Header = () => {
  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gray3);
        padding: 1rem 0;
      `}
    >
      <HeaderContainer>
        <div>
          <Link href="/">
            <Logo> P </Logo>
          </Link>
          <SearchBox /> <Nav />
        </div>
        <div>
          <p>Hi: User</p>
          <button type="button">Sign out</button>
          <Link href="/">Login</Link>
          <Link href="/">Create an acount</Link>
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
