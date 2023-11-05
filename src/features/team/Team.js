import styled from "styled-components";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

import Title from "../../ui/Title";
import SectionHeading from "../../ui/SectionHeading";

import { teamMembers } from "../../data/data-teamMembers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardContainer = styled.div`
  margin: 0 auto;
  margin-top: 3rem;

  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(3, 33rem);
  align-items: center;
  column-gap: 4rem;
  row-gap: 6rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all 0.3s;

  ::after {
    content: "";
    bottom: 0;
    left: 0;
    margin: 0 auto;
    height: 1rem;
    width: 5rem;
    background-color: var(--color-brand-600);
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &:hover {
    transform: translateY(-1%);
    box-shadow: var(--shadow-md);
  }

  &:hover::after {
    transform: scaleY(1);
    width: 100%;
  }

  &:hover img {
    filter: brightness(0.9);
    transform: scale(1.08);
  }
`;

const ImgContainer = styled.div`
  background-color: var(--color-brand-50);
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 35rem;
`;

const HoverDetails = styled.div`
  position: absolute;

  top: -50%;
  transform: translateY(-50%);

  width: 100%;
  height: 300%;

  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 99999;

  transition: all 0.3s;

  color: var(--color-grey-800);

  & h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  & p {
    font-size: 2.4rem;
    font-weight: 800;
  }

  &:hover {
    top: 50%;
  }
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  opacity: 1;
  filter: brightness(40%);

  transition: all 0.3s;
`;

const Details = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  font-size: 2.6rem;
  font-weight: 600;
`;

const Role = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-grey-500);
`;

const Social = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  font-size: 2rem;
  color: var(--color-grey-600);
  gap: 2rem;

  & svg:hover {
    color: var(--color-grey-800);
  }
`;

function Team() {
  return (
    <Container>
      <SectionHeading>Our Team</SectionHeading>
      <Title>Meet the team behind PathFinder</Title>

      <CardContainer>
        {teamMembers.map((member) => (
          <CardComponent key={member.id} member={member} />
        ))}
      </CardContainer>
    </Container>
  );
}

function CardComponent({ member }) {
  return (
    <Card>
      <ImgContainer>
        <HoverDetails>
          <h3>{member.fullName}</h3>
          <p>{member.usn}</p>
        </HoverDetails>
        <Img src={member.image} alt={`${member.name}(Team member)`} />
      </ImgContainer>
      <Details>
        <Name>{member.name}</Name>
        <Role>{member.role}</Role>
        <Social>
          <span>
            <AiOutlineLinkedin />
          </span>
          <span>
            <AiOutlineInstagram />
          </span>
          <span>
            <AiOutlineTwitter />
          </span>
          <span>
            <AiOutlineMail />
          </span>
        </Social>
      </Details>
    </Card>
  );
}

export default Team;
