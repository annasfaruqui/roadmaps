import styled from "styled-components";

import Button from "../../ui/Button";
import GlobalP from "../../styles/GlobalP";
import HighlightContainer from "../../styles/HighlightContainer";
import { useNavigate } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 1.2rem;
`;

function Hero() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  function handleClick() {
    if (!isLoading && !isAuthenticated) navigate("/login");
    if (isLoading) return <SpinnerMini />;
    if (isAuthenticated) navigate("/assessment-home");
  }

  return (
    <>
      <StyledHero>
        <GlobalP>
          Embark on a journey of knowledge and expertise with our meticulously
          crafted technology roadmaps. Whether you're an aspiring developer, a
          seasoned IT professional, or simply curious about the ever-evolving
          tech landscape, our roadmaps are your trusted guide to efficient
          learning. Explore our curated pathways, complete with expert insights,
          recommended resources, and milestones. Start your learning adventure
          today and stay ahead in the world of technology.
        </GlobalP>

        <GlobalP>
          Ready to kickstart your journey towards tech mastery but not sure
          where to begin? Take our personalized assessment test! It's your first
          step towards a tailor-made learning experience. Our assessment will
          gauge your current knowledge, skills, and goals, enabling us to
          recommend the perfect roadmap for your unique needs. Whether you're a
          coding newbie or a seasoned pro, our test will ensure your learning
          journey is efficient and effective. Get started now and unlock your
          path to tech expertise!
        </GlobalP>
      </StyledHero>
      <HighlightContainer>
        <GlobalP>
          "Our assessment test isn't just a formality; it's your key to
          unlocking a learning journey that suits you like a glove. By taking
          this test, you gain invaluable insights into your current knowledge
          and skills, helping us understand your unique learning needs. Armed
          with this information, we can recommend the perfect technology roadmap
          to match your proficiency level and align with your specific goals.
          Say goodbye to one-size-fits-all approaches and hello to a
          personalized learning experience that maximizes your potential. Take
          the test today and pave the way for a learning journey that's as
          unique as you are"
        </GlobalP>

        <Button size="large" onClick={handleClick}>
          TAKE ASSESSMENT NOW &rarr;
        </Button>
      </HighlightContainer>
    </>
  );
}

export default Hero;
