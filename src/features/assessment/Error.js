import styled from "styled-components";

const StyledError = styled.p`
  color: var(--color-red-700);
  font-size: 2rem;
`;

function Error() {
  return (
    <StyledError>
      <span>🤕</span>There was an error loading the assessment<span>💥</span>
    </StyledError>
  );
}

export default Error;
