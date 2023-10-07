import UserTestimonials from "../features/testimonials/UserTestimonials";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Testimonials() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">User Testimonials</Heading>
      </Row>

      <UserTestimonials />
    </>
  );
}

export default Testimonials;
