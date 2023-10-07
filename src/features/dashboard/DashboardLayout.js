import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import Welcome from "./Welcome";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Welcome />
      <ProfileCard />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
