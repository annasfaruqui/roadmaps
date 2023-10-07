import styled from "styled-components";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledMain = styled.div`
  max-width: 90rem;
  padding: 1.5rem;
`;

const SubHeading = styled.h2`
  font-size: 4.8rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 2rem;
`;

const P = styled.p`
  margin: 3rem 0;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
`;

const Div = styled.div`
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function Main() {
  const navigate = useNavigate();

  function handleStart() {
    console.log("function");
  }

  return (
    <StyledMain>
      <SubHeading>Welcome to the assessment</SubHeading>
      <P>
        Few questions to recommed the perfect roadmap the technology that best
        suits you
      </P>

      <Div>
        <Button size="large" onClick={handleStart}>
          START THE ASSESSMENT
        </Button>
        <Button size="large" variation="secondary" onClick={() => navigate(-1)}>
          CANCEL
        </Button>
      </Div>
    </StyledMain>
  );
}

export default Main;
