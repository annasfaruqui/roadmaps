import logoTechCrunch from "../../images/logos/techcrunch.png";
import logoBusinessInsider from "../../images/logos/business-insider.png";
import logoForbes from "../../images/logos/forbes.png";
import logoNewYorkTimes from "../../images/logos/the-new-york-times.png";
import logoUsaToday from "../../images/logos/usa-today.png";
import styled from "styled-components";

const StyledFeaturedIn = styled.div`
  grid-column: 2/-2;
  margin-top: 4rem;
  margin-bottom: 10rem;
`;

const SmallHeading = styled.h4`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 3rem;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    height: 3.2rem;
  }
`;

function FeaturedIn() {
  return (
    <StyledFeaturedIn>
      <SmallHeading>As featured in</SmallHeading>
      <Logos>
        <img src={logoTechCrunch} alt="logo" />
        <img src={logoBusinessInsider} alt="logo" />
        <img src={logoForbes} alt="logo" />
        <img src={logoNewYorkTimes} alt="logo" />
        <img src={logoUsaToday} alt="logo" />
      </Logos>
    </StyledFeaturedIn>
  );
}

export default FeaturedIn;
