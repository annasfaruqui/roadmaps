import styled from "styled-components";
import Hero from "./Hero";
import HomeContent from "./HomeContent";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

function Home() {
  return (
    <ContainerDiv>
      <Hero />
      <HomeContent />
    </ContainerDiv>
  );
}

export default Home;
