import Row from "../ui/Row";
import Heading from "../ui/Heading";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function DashboardPage() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>

      <DashboardLayout />
    </>
  );
}

export default DashboardPage;
