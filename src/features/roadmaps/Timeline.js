import { useState } from "react";
import styled from "styled-components";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaFlagCheckered } from "react-icons/fa";

import ButtonLink from "../../ui/ButtonLink";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";

const TimelineDiv = styled.div`
  border: 3px solid var(--color-brand-200);
  border-radius: var(--border-radius-xl);
  background-color: var(--color-grey-0);
`;

// const Tag = styled.div`
//   display: inline;
//   padding: 1rem 2rem;
//   font-size: 1.4rem;
//   border-radius: var(--border-radius-xxl);
//   background-color: var(--color-brand-700);
//   color: #fff;
// `;

const ItemContent = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;

  & h2 {
    font-size: 3rem;
    font-weight: 800;
    color: inherit;
  }

  & p {
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.4;
  }
`;

function Timeline({ renderRoadmap, roadmapUrl }) {
  const [isCompleted, setIsCompleted] = useState(false);

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
            {renderRoadmap.map((el, id) => (
              <VerticalTimelineElement
                key={id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "var(--color-grey-100)",
                  color: "var(--color-grey-700)",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${
                    !isCompleted ? "rgb(33, 150, 243)" : "green"
                  }`,
                }}
                // date={<Tag>advanced</Tag>}
                iconStyle={{
                  background: `${!isCompleted ? "rgb(33, 150, 243)" : "green"}`,
                  color: "#d1d5db",
                }}
                icon={<HiOutlineChevronDown />}
              >
                <ItemContent>
                  <div>
                    <h2>{el.heading}</h2>
                    <p>{el.content}</p>
                  </div>
                  <ButtonGroup>
                    <ButtonLink
                      to={`/roadmaps/${roadmapUrl}/${el.heading
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      More info &nbsp; &rarr;
                    </ButtonLink>
                    <Button
                      variation="secondary"
                      onClick={() => {
                        console.log("completed");
                        setIsCompleted((state) => !state);
                      }}
                    >
                      Mark as completed
                    </Button>
                  </ButtonGroup>
                </ItemContent>
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

export default Timeline;
