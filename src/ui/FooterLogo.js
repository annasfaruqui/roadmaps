import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  border-radius:50%;

`;

function FooterLogo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? '/logofooter.png' : '/logofooterlight.png';
  // const src = "/roadmap.svg";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default FooterLogo;
