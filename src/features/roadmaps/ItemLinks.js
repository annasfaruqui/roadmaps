import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../ui/Button";

import { frontendRoadmap } from "../../data/data-frontend";
import { backendRoadmap } from "../../data/data-backend";
import { devopsRoadmap } from "../../data/data-devops";
import { uiuxDesigningRoadmap } from "../../data/data-uiuxDesigning";
import { softwareArchitectureRoadmap } from "../../data/data-softwareArchitecture";

import { capitalizeFirstLetterEveryWord } from "../../utils/capitalizer";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  margin-top: -1rem;
`;

const Intro = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-grey-600);

  margin-top: -2rem;
  margin-bottom: 3rem;
`;

const BtnContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Div = styled.div`
  margin-bottom: 2.2rem;
`;

const Topic = styled.h3`
  color: var(--color-grey-500);
  font-size: 3rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: var(--color-grey-500);
  font-size: 2rem;
  font-weight: 300;
`;

const P = styled.p`
  font-size: 1.8rem;
`;

const A = styled.a`
  color: var(--color-brand-600);
  text-decoration: underline;

  &:hover {
    color: var(--color-grey-500);
  }
`;

function ItemLinks({ roadmap, subCategory }) {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  let item;

  if (roadmap === "frontend-development") item = frontendRoadmap;
  if (roadmap === "backend-development") item = backendRoadmap;
  if (roadmap === "devops") item = devopsRoadmap;
  if (roadmap === "software-architecture") item = softwareArchitectureRoadmap;
  if (roadmap === "ui-ux-designing") item = uiuxDesigningRoadmap;

  const [Item] = item.filter(
    (item) =>
      capitalizeFirstLetterEveryWord(item.heading).toLowerCase() ===
      capitalizeFirstLetterEveryWord(subCategory).toLowerCase()
  );

  return (
    <LinkContainer>
      <Intro>{Item.content}</Intro>
      {Item.details.map((detail, i) => (
        <ItemLink detail={detail} key={i} />
      ))}
      <BtnContainer>
        {!isCompleted ? (
          <Button onClick={() => setIsCompleted((state) => !state)}>
            Mark as Completed
          </Button>
        ) : (
          <Button>Move to next item</Button>
        )}
        <Button
          variation="secondary"
          onClick={() => navigate(`/roadmaps/${roadmap}`, { replace: true })}
        >
          Go back
        </Button>
      </BtnContainer>
    </LinkContainer>
  );
}

function ItemLink({ detail }) {
  const { Topic: topic, Description: desc, Resource: res } = detail;

  return (
    <Div>
      <Topic>{topic}</Topic>
      <Description>{desc}</Description>
      <P>
        Read more at: &nbsp;
        <A href={res} target="_blank">
          {res}
        </A>
      </P>
    </Div>
  );
}

export default ItemLinks;
