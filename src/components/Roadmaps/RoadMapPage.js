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

// ///////////////////////////////////////////////
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { BsPersonWorkspace } from "react-icons/bs";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaFlagCheckered } from "react-icons/fa";
import { RiStopCircleLine } from "react-icons/ri";

const P = styled.p`
  font-size: 2rem;
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

const Input = styled.input``;

const Span = styled.span`
  margin-left: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

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
      <Timeline roadmap={renderRoadmap} />
    </>
  );
}

function Timeline({ roadmap }) {
  return (
    <TestTimeline roadmap={roadmap} />

    // <div className="timeline" id="main">
    //   {roadmap.map((el, index) => (
    //     <div
    //       key={index}
    //       className={`container ${index % 2 === 0 ? "left" : "right"}`}
    //     >
    //       <Modal>
    //         <Modal.Open opens="roadmap-modal">
    //           <div className="content">
    //             <H2Content heading={el.heading} content={el.content} />
    //           </div>
    //         </Modal.Open>

    //         <Modal.Window name="roadmap-modal">
    //           <ModalContent detail={el.details.map((detail) => detail)} />
    //         </Modal.Window>
    //       </Modal>
    //     </div>
    //   ))}
    // </div>
  );
}

const TimelineDiv = styled.div`
  border: 3px solid var(--color-brand-200);
  border-radius: var(--border-radius-xl);
  background-color: var(--color-grey-0);
`;

const Tag = styled.div`
  display: inline;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  border-radius: var(--border-radius-xxl);
  background-color: var(--color-brand-700);
  color: #fff;
`;

function TestTimeline({ roadmap }) {
  return (
    <div>
      <TimelineDiv>
        <VerticalTimeline lineColor="var(--color-grey-500)">
          <VerticalTimelineElement
            iconStyle={{
              background: "var(--color-brand-500)",
              color: "#d1d5db",
            }}
            icon={<HiOutlineChevronDoubleDown />}
          />
          <div>
            {roadmap.map((el, id) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "var(--color-grey-50)",
                  color: "var(--color-grey-700)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                // date={<Tag>advanced</Tag>}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#d1d5db",
                }}
                icon={<HiOutlineChevronDown />}
              >
                <Modal>
                  <Modal.Open opens="roadmapLinks">
                    <div className="content">
                      <h5 style={{ fontSize: "3rem" }}>{el.heading}</h5>
                      <p style={{ fontSize: "1.8rem" }}>{el.content}</p>
                    </div>
                  </Modal.Open>
                  <Modal.Window name="roadmapLinks">
                    <ModalContent detail={el.details.map((detail) => detail)} />
                  </Modal.Window>
                </Modal>
              </VerticalTimelineElement>
            ))}
          </div>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaFlagCheckered />}
          />
        </VerticalTimeline>
      </TimelineDiv>
    </div>
  );
}

export default RoadMapPage;