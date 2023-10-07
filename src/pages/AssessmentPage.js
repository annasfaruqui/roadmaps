import AssessmentHome from "../features/assessment/AssessmentHome";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AssessmentPage() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Assessment</Heading>
      </Row>

      <AssessmentHome />
    </>
  );
}

export default AssessmentPage;
