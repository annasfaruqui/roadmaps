import styled from "styled-components";

const quotes = [
  {
    id: 1,
    quote:
      "A well-structured roadmap is like having a personal guide on your journey of learning. It not only saves you time but also ensures you reach your destination with a deeper understanding.",
    author: "John Doe",
    profession: "Technology Enthusiast",
  },
  {
    id: 2,
    quote:
      "In the world of technology, the road to mastery is often winding and complex. Roadmaps provide the much-needed clarity and direction to help you navigate and succeed.",
    author: "Jane Smith",
    profession: "Software Engineer",
  },
  {
    id: 3,
    quote:
      "Don't let the vastness of technology overwhelm you. A roadmap is your strategic plan, ensuring that every step you take leads you closer to expertise.",
    author: "David Johnson",
    profession: "IT Professional",
  },
  {
    id: 4,
    quote:
      "Learning without a roadmap is like trying to build a puzzle without the picture on the box. Roadmaps provide the missing piece, helping you see the bigger picture of your learning journey.",
    author: "Emily Davis",
    profession: "Web Developer",
  },
  {
    id: 5,
    quote:
      "A roadmap is your treasure map in the world of technology. It not only reveals the path to knowledge but also the hidden gems along the way.",
    author: "Mark Williams",
    profession: "Data Scientist",
  },
  {
    id: 6,
    quote:
      "Roadmaps aren't just about reaching your destination; they're about enjoying the journey of learning, with each milestone bringing a sense of accomplishment.",
    author: "Sarah Adams",
    profession: "Tech Blogger",
  },
];

const StyledQuotation = styled.div`
  background-color: var(--color-brand-100);

  border-radius: var(--border-radius-sm);
  padding: 2rem 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Quote = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  font-style: italic;
`;

const Author = styled.p`
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: -0.8px;
  align-self: end;
`;

function Quotations() {
  return (
    <>
      {quotes.map((quote) => (
        <Quotation key={quote.id} quote={quote} />
      ))}
    </>
  );
}

function Quotation({ quote }) {
  return (
    <StyledQuotation>
      <Quote>"{quote.quote}"</Quote>
      <Author>
        &mdash;{quote.author}, ({quote.profession})
      </Author>
    </StyledQuotation>
  );
}

export default Quotations;
