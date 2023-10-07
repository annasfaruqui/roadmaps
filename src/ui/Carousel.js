import styled from "styled-components";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import img1 from "../carousel/carousel-img-1.jpg";
import img2 from "../carousel/carousel-img-2.jpg";
import img3 from "../carousel/carousel-img-3.jpg";

const Div = styled.div`
  height: calc(100vh - 9rem);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  padding: 4rem 8rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallDiv = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const SubHeading = styled.p`
  font-size: 6rem;
  font-weight: 400;
  color: #a8a8a8;
`;

const P = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
  color: #969696;

  /* letter-spacing: 1px; */
`;

function PageCarousel() {
  const items = [
    <Div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url(${img1})`,
      }}
    >
      <SmallDiv>
        <SubHeading>Before learning tech properly:</SubHeading>
        <P>Lost in self-doubt and under-confidence</P>
      </SmallDiv>
    </Div>,
    <Div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url(${img2})`,
      }}
    >
      <SmallDiv>
        <SubHeading>Learning tech properly:</SubHeading>
        <P>Hardwork, dedication and proper use of roadmaps</P>
      </SmallDiv>
    </Div>,
    <Div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url(${img3})`,
      }}
    >
      <SmallDiv>
        <SubHeading>After having learnt tech properly:</SubHeading>
        <P>Making better and efficient decisions in businesses</P>
      </SmallDiv>
    </Div>,
  ];

  return (
    <AliceCarousel
      items={items}
      autoPlay={true}
      autoPlayDirection="ltr"
      autoPlayInterval={3000}
      autoPlayStrategy="none"
      infinite={true}
      animationDuration={1000}
      // disableSlideInfo={false}
      disableButtonsControls={true}
      disableDotsControls={true}
    />
  );
}

export default PageCarousel;
