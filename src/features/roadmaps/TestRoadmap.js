import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { BsPersonWorkspace } from "react-icons/bs";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FaFlagCheckered } from "react-icons/fa";

import styled from "styled-components";

const Div = styled.div`
  border: 3px solid var(--color-brand-200);
  border-radius: var(--border-radius-xl);
  background-color: var(--color-grey-0);
`;

function TestRoadmap() {
  return (
    <div>
      <Div>
        <VerticalTimeline lineColor="var(--color-grey-700)">
          <VerticalTimelineElement
            iconStyle={{
              background: "var(--color-brand-500)",
              color: "#fff",
            }}
            icon={<HiOutlineChevronDoubleDown />}
          />
          <div>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<BsPersonWorkspace />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </div>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaFlagCheckered />}
          />
        </VerticalTimeline>
      </Div>
    </div>
  );
}

export default TestRoadmap;
