import styled from "styled-components";

import Button from "../../ui/Button";

import heroImg from "../../images/sections-header-image.jpg";

const StyledHero = styled.div`
  grid-column: 1/-1;
  grid-row: 1;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  position: relative;
`;

const ContentBox = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Intro = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin-bottom: 1rem;
  color: #9fb3ff;
`;

const Title = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  word-spacing: 5px;
  margin-bottom: 2rem;

  & span {
    color: #9fb3ff;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

function Hero() {
  return (
    <StyledHero>
      <ContentBox>
        <Intro>Start learning now</Intro>
        <Title>
          Your path to <span>tech expertise</span> starts here
        </Title>
        <Description>
          Unlock Your Potential in Tech: Explore Guided Roadmaps to Master
          Frontend and Backend Development, Data Science, Cybersecurity, and
          More – Your Journey Starts Here!
        </Description>
        <ButtonContainer>
          <Button size="large">Start exploring</Button>
          <Button sie="large" variation="secondary">
            Learn more &darr;
          </Button>
        </ButtonContainer>
      </ContentBox>
    </StyledHero>
  );
}

export default Hero;
