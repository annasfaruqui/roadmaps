import styled from "styled-components";
import GlobalP from "../../styles/GlobalP";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import { useNavigate } from "react-router-dom";

const StyledAssessmentContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Div = styled.div`
  display: flex;
  gap: 2rem;
`;

function AssessmentHome() {
  const navigate = useNavigate();

  return (
    <StyledAssessmentContent>
      <Heading as="h1" type="heading">
        Discover Your Learning Path: Take the Assessment 📃
      </Heading>

      <GlobalP mb={5}>
        Welcome to our personalized learning assessment! At PathFinder, we
        believe in tailoring your learning journey to match your interests,
        skills, and goals. This assessment will help you discover the ideal
        technology roadmap based on your preferences. It's like having a
        personal guide on your path to expertise. So, let's get started! Answer
        a few questions, and we'll recommend the perfect learning pathway that
        aligns with your aspirations. Get ready to embark on a learning
        adventure customized just for you.
      </GlobalP>

      <Div>
        <Button size="large" onClick={() => navigate("/assessment")}>
          TAKE ASSESSMENT NOW &rarr;
        </Button>
      </Div>
    </StyledAssessmentContent>
  );
}

export default AssessmentHome;
