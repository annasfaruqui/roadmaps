import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import "./FlipCard.css";
import Heading from "../ui/Heading";
import GlobalP from "../styles/GlobalP";

const StyledLink = styled.button`
  border: 0;
  color: var(--color-grey-500);
  font-weight: 600;
  cursor: pointer;
  padding: 1rem;
  background-color: var(--color-brand-50);
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #eee;
    background-color: var(--color-brand-500);
  }

  &:focus {
    outline: none;
  }
`;

function FlipCard({ title, description, link, background }) {
  const navigate = useNavigate();

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.5)
            ),url(${background})`,
          }}
        >
          <h2 className="front-heading">{title}</h2>
        </div>

        <div className="flip-card-back">
          <Heading as="h2" type="heading-secondary">
            {title}
          </Heading>
          <GlobalP mb={2}>{description}</GlobalP>
          <StyledLink onClick={() => navigate(`/roadmaps/${link}`)}>
            Click Here To Access The Roadmap
          </StyledLink>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
