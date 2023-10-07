import styled from "styled-components";

const testimonials = [
  {
    id: 1,
    userInterest /* user interview*/: "Aspiring Web Developer",
    image: "./imgs/sarah-thompson.jpg",
    name: "Sarah Thompson",
    occupation: "Marketing Professional",
    testimonial:
      "I had no coding experience, but I was eager to switch careers to become a web developer. Your roadmap made it so easy to understand where to start and how to progress. I'm now employed as a frontend developer, thanks to the guidance I found here!",
  },
  {
    id: 2,
    userInterest: "Data Science Enthusiast",
    image: "./imgs/john-patel.jpg",
    name: "John Patel",
    occupation: "University Student",
    testimonial:
      "Your platform helped me navigate the complex world of data science. The recommended courses and projects were not only informative but also fun to work on. I'm now conducting research in machine learning with the skills I gained here.",
  },
  {
    id: 3,
    userInterest: "Cybersecurity Enthusiast",
    image: "./imgs/david-chang.jpg",
    name: "David Chang",
    occupation: "IT Support Specialist",
    testimonial:
      "I always had a passion for cybersecurity, but I didn't know where to start. Your roadmap broke down the journey into manageable steps. Today, I'm working as a cybersecurity analyst, and it all began with your platform.",
  },
  {
    id: 4,
    userInterest: "AI and Machine Learning Enthusiast",
    image: "./imgs/rajesh-kumar.jpg",
    name: "Rajesh Kumar",
    occupation: "Software Engineer",
    testimonial:
      "Your platform made learning AI and machine learning accessible. The curated resources and hands-on projects were exactly what I needed to upskill. I've since implemented machine learning solutions in my job and received a promotion!",
  },
  {
    id: 5,
    userInterest: "Programming Enthusiast",
    image: "./imgs/alex-turner.jpg",
    name: "Alex Turner",
    occupation: "Freelance Web Developer",
    testimonial:
      "I'm always looking to expand my skillset, and your roadmap for mastering programming languages was invaluable. I've added several new languages to my toolkit, and it's made me a more versatile developer.",
  },
  {
    id: 6,
    userInterest: "DevOps Enthusiast",
    image: "./imgs/sarah-davis.jpg",
    name: "Sarah Davis",
    occupation: "DevOps Engineer",
    testimonial:
      "Continuous learning is a core principle in DevOps, and your roadmap platform has been a game-changer for me. As a DevOps Engineer, staying updated with the latest tools and practices is essential, and your roadmap for DevOps has been invaluable. It's provided me with a structured path to acquire new skills and deepen my understanding of this critical field. Thanks to your platform, I've been able to implement best practices in my work, streamline our development pipelines, and enhance collaboration between teams. Keep up the excellent work!",
  },
];

const TestimonialHeading = styled.h4`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: -1rem;
`;

const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Testimonial = styled.div`
  background-color: var(--color-brand-100);
  border: 1px solid var(--color-brand-500);
  border-radius: var(--border-radius-md);

  display: grid;
  grid-template-columns: 1fr 13rem;
  grid-template-rows: auto 1fr;

  padding: 1rem 2rem;
  column-gap: 3rem;
`;

const Quote = styled.p`
  grid-row: 1;
  grid-column: 1;
  font-size: 1.7rem;
  font-weight: 300;
`;

const AuthorBox = styled.div`
  grid-row: 2;
  grid-column: 1;

  margin-left: auto;
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Img = styled.img`
  grid-column: 2;
  grid-row: 1/-1;
  margin: auto;

  border-radius: 50%;

  width: 100%;
`;

const AuthorName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;

const AuthorInterest = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
`;

function UserTestimonials() {
  return (
    <>
      <TestimonialHeading>
        Here is what a few of our users had to say about us:
      </TestimonialHeading>

      <TestimonialList>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id}>
            <Quote>
              <em>&ldquo;{testimonial.testimonial}&rdquo;</em>
            </Quote>
            <AuthorBox>
              <AuthorName>
                &mdash; {testimonial.name}{" "}
                <span>({testimonial.occupation})</span>{" "}
              </AuthorName>
              <AuthorInterest>
                <em>
                  <strong>({testimonial.userInterest})</strong>
                </em>
              </AuthorInterest>
            </AuthorBox>
            <Img src={testimonial.image} alt={testimonial.name} />
          </Testimonial>
        ))}
      </TestimonialList>
    </>
  );
}

export default UserTestimonials;
