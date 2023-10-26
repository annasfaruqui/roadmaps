import { useParams } from "react-router-dom";
import styled from "styled-components";

import "./roadmap.css";

import Modal from "../../ui/Modal";
import Heading from "../../ui/Heading";

import { frontendRoadmap } from "../../data/data-frontend";
import { backendRoadmap } from "../../data/data-backend";
import { devopsRoadmap } from "../../data/data-devops";
import { softwareArchitectureRoadmap } from "../../data/data-softwareArchitecture";
import { uiuxDesigningRoadmap } from "../../data/data-uiuxDesigning";

const P = styled.p`
  font-size: 1.8rem;
`;

const Div = styled.div`
  margin-bottom: 2.2rem;
  min-width: 120rem;
`;

const Topic = styled.a`
  color: var(--color-grey-800);
  font-size: 2.4rem;
  font-weight: 300;
  transition: all 0.3s;

  &:hover {
    color: var(--color-grey-500);
  }
`;

const Description = styled.p`
  color: var(--color-grey-400);
  font-size: 1.8rem;
`;

const A = styled.a`
  color: var(--color-brand-600);
  text-decoration: underline;

  &:hover {
    color: var(--color-grey-500);
  }
`;

function H2Content({ heading, content }) {
  return (
    <>
      <Heading as="h5">{heading}</Heading>
      <P>{content}</P>
    </>
  );
}

function ModalContent({ detail }) {
  return detail.map((el, idx) => (
    <Link key={idx} topic={el.Topic} desc={el.Description} res={el.Resource} />
  ));
}

function Link({ topic, desc, res }) {
  return (
    <Div>
      <Topic href={res} target="_blank">
        {topic}
      </Topic>
      <Description>
        {desc}{" "}
        <span>
          <A href={res} target="_blank">
            Click here to read more
          </A>
        </span>
      </Description>
    </Div>
  );
}

function RoadMapPage() {
  const { roadmap } = useParams();
  console.log(roadmap);

  let renderRoadmap;

  if (roadmap === "frontend-development") renderRoadmap = frontendRoadmap;
  if (roadmap === "backend-development") renderRoadmap = backendRoadmap;
  if (roadmap === "devops") renderRoadmap = devopsRoadmap;
  if (roadmap === "software-architecture")
    renderRoadmap = softwareArchitectureRoadmap;
  if (roadmap === "ui-ux-designing") renderRoadmap = uiuxDesigningRoadmap;

  function capitalizeFirstLetter(input) {
    let string = input;
    return string[0].toUpperCase() + string.slice(1);
  }

  const title = roadmap
    .split("-")
    .map((el) => capitalizeFirstLetter(el))
    .join(" ");

  return (
    <>
      <Heading as="h1">{title} Roadmap</Heading>
      <div>
        <div className="timeline" id="main">
          {renderRoadmap.map((el, index) => (
            <div
              key={index}
              className={`container ${index % 2 === 0 ? "left" : "right"}`}
            >
              <Modal>
                <Modal.Open opens="roadmap-modal">
                  <div className="content">
                    <H2Content heading={el.heading} content={el.content} />
                  </div>
                </Modal.Open>

                <Modal.Window name="roadmap-modal">
                  <ModalContent detail={el.details.map((detail) => detail)} />
                </Modal.Window>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RoadMapPage;
