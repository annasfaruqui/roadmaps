import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Logo from "../ui/Logo";
import DarkModeToggle from "../ui/DarkModeToggle";
import Button from "../ui/Button";
import PageCarousel from "../ui/Carousel";
import Home from "../features/home/Home";
import Heading from "../ui/Heading";
import Footer from "../ui/Footer";
import SpinnerMini from "../ui/SpinnerMini";

import { useUser } from "../features/authentication/useUser";

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: 9rem calc(100vh - 9rem) repeat(4, auto);
  background-color: var(--color-grey-50);
`;

const HeaderNav = styled.ul`
  width: 100%;
  height: 9rem;
  z-index: 10;
  background-image: linear-gradient(
    to bottom,
    var(--color-grey-0-opacity),
    var(--color-grey-0-opacity)
  );
  padding: 1.2rem 2.4rem;
  border-bottom: 2px solid var(--color-grey-100);

  overflow: hidden;

  position: fixed;

  display: flex;
  gap: 1.8rem;
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

const Empty = styled.div`
  grid-column: 1/-1;
  grid-row: 1;
`;

const StyledCarousel = styled.div`
  grid-column: 1/-1;
  grid-row: 2;
`;

const Title = styled.div`
  grid-column: 1/-1;
  background-color: var(--color-brand-100);

  padding: 4rem 8rem;
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: repeat(14, 1fr);
`;

const HeadingContent = styled.div`
  grid-column: 2/-2;
`;

const Container = styled.div`
  grid-column: 3/-3;
`;

const FooterContainer = styled.div`
  grid-column: 2/-2;
`;

function HomePage() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  function handleLogin() {
    if (!isLoading && !isAuthenticated) navigate("/login");
    if (isLoading) return <SpinnerMini />;
    if (isAuthenticated) navigate("/dashboard");
  }

  return (
    <>
      <HeaderNav>
        <Li onClick={() => navigate("/")}>
          <Logo />
        </Li>
        <Li>
          <DarkModeToggle />
        </Li>
        <Li>
          <Button variation="secondary" onClick={() => navigate("/signup")}>
            SIGN UP
          </Button>
        </Li>
        <Li>
          <Button onClick={handleLogin}>LOGIN</Button>
        </Li>
      </HeaderNav>
      <Body>
        <Empty></Empty>
        <StyledCarousel>
          <PageCarousel />
        </StyledCarousel>
        <Title>
          <HeadingContent>
            <Heading as="h1" type="heading">
              🚀 Unlock Your Learning Journey:
              <br />
              Efficient Roadmaps for Mastering Technologies
            </Heading>
          </HeadingContent>
        </Title>
        <Container>
          <Home />
        </Container>
        <FooterContainer>
          <Footer mlr="10.65" />
        </FooterContainer>
      </Body>
    </>
  );
}

export default HomePage;
