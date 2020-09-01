import SearchBox from "./ui/SearchBox";
import Nav from "./Nav";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Button from "./ui/Button";

const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  .logo_section {
    display: flex;
    align-items: center;
  }
  .header_buttons {
    display: flex;
    align-items: center;
  }
  .user_hi {
    margin-right: 2rem;
  }
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
  :hover {
    cursor: pointer;
  }
`;
const Header = () => {
  const user = false;
  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gray3);
        padding: 1rem 0;
      `}
    >
      <HeaderContainer>
        <div className="logo_section">
          <Link href="/">
            <Logo>PH </Logo>
          </Link>
          <SearchBox /> <Nav />
        </div>
        <div className="header_buttons">
          {user ? (
            <>
              <p className="user_hi">Hi: User</p>
              <Button bgColor>Sign out</Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button bgColor>Login</Button>
              </Link>
              <Link href="/createaccount">
                <Button>Create an account</Button>
              </Link>
            </>
          )}
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
