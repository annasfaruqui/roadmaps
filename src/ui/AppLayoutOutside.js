import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserAvatar from "../features/authentication/UserAvatar";

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  /* grid-template-rows: 8rem 1fr; */
  height: 100vh;
  background-color: var(--color-grey-50);
`;

const HeaderNav = styled.ul`
  grid-row: 1;
  grid-column: 1/-1;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 2px solid var(--color-grey-100);

  overflow: hidden;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const Li = styled.li`
  &:first-child {
    justify-self: flex-start;
    margin-right: auto;
    cursor: pointer;
  }
`;

const Container = styled.div`
  grid-column: 2/-2;
  /* grid-row: 2; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function AppLayoutOutside() {
  const navigate = useNavigate();

  return (
    <Body>
      {/* <HeaderNav>
        <Li onClick={() => navigate("/")}>
          <Logo />
        </Li>
        <Li>
          <DarkModeToggle />
        </Li>
        <Li>
          <UserAvatar />
        </Li>
      </HeaderNav> */}
      <Container>
        <Outlet />
      </Container>
    </Body>
  );
}

export default AppLayoutOutside;
