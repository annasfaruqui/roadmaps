import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import GlobalP from "../../styles/GlobalP";
import HighlightContainer from "../../styles/HighlightContainer";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Quotations from "../../ui/Quotations";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

import { useUser } from "../authentication/useUser";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.2rem;
  row-gap: 2.4rem;
  margin-bottom: 3rem;
`;

function HomeContent() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  function handleClick() {
    if (!isLoading && !isAuthenticated) navigate("/login");
    if (isLoading) return <SpinnerMini />;
    if (isAuthenticated) navigate("/assessment-home");
  }

  return (
    <Row>
      <Heading as="h2" type="heading-secondary">
        Why should you use a roadmap?
      </Heading>
      <GlobalP>
        A roadmap is your compass in the ever-evolving landscape of technology.
        It serves as a structured guide that not only charts the course but also
        illuminates the milestones along your learning journey. Without a
        roadmap, you risk wandering aimlessly, overwhelmed by the vastness of
        information and unsure of your progress. Our roadmaps provide clarity
        and direction, ensuring that every step you take is purposeful and
        efficient. They empower you to set achievable goals, track your growth,
        and ultimately reach your destination with confidence. Don't navigate
        the tech world without a roadmap; let it be your trusted companion on
        your path to expertise.
      </GlobalP>
      <GlobalP mb={3}>
        Here is what a few notable individuals had to say about the importance
        of roadmaps:
      </GlobalP>
      <StyledGrid>
        <Quotations />
      </StyledGrid>
      <HighlightContainer type="horizontal">
        <Heading as="h5">Try our psychometric assessment now!</Heading>
        <Button size="large" onClick={handleClick}>
          TAKE ASSESSMENT{" "}
        </Button>
      </HighlightContainer>
    </Row>
  );
}

export default HomeContent;
