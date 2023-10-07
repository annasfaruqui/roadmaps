import styled from "styled-components";

import "./Assessment.css";

import InteractiveAssessment from "./InteractiveAssessment";
import DarkModeToggle from "../../ui/DarkModeToggle";
import UserAvatar from "../authentication/UserAvatar";
import Logo from "../../ui/Logo";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import { createContext, useContext, useState } from "react";

const Container = styled.div`
  background-color: var(--color-brand-200);

  min-height: 80vh;
  width: 100rem;
  margin: 10rem auto auto auto;

  padding: 2rem 2rem;
  border-radius: var(--border-radius-lg);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TopLeft = styled.div`
  position: absolute;

  border: 2px solid var(--color-grey-200);
  border-radius: 50%;
  padding: 0 0.6rem;
  top: 1rem;
  left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopRight = styled.div`
  position: absolute;
  background-color: var(--color-grey-200);

  border: 2px solid var(--color-grey-400);
  border-radius: var(--border-radius-lg);
  top: 1rem;
  right: 1rem;

  padding: 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const PageHeading = styled.h1`
  padding: 2rem 4rem;
  background-color: var(--color-brand-100);
  font-size: 5.2rem;
  font-weight: 500;
  text-align: center;
  border-radius: var(--border-radius-sm);
`;

const PageContent = styled.div`
  margin: auto 0;
  height: 75%;
  width: 100%;
  padding: 3rem 4rem;
  background-color: var(--color-brand-100);
  border-radius: var(--border-radius-md);
`;

const Div = styled.div`
  margin: 0 auto;
`;

const StartContext = createContext();

function StartProvider({ children }) {
  const [isStarted, setIsStarted] = useState(false);

  function handleStart() {
    setIsStarted((started) => !started);
  }

  return (
    <StartContext.Provider value={{ isStarted, setIsStarted, handleStart }}>
      {children}
    </StartContext.Provider>
  );
}

function useStart() {
  const context = useContext(StartContext);
  if (context === undefined)
    throw new Error("StartContext used outside of StartProvider");

  return context;
}

function StartScreen() {
  const { handleStart } = useStart();

  return (
    <Row>
      <Heading as="h5" textCenter="true">
        A few questions to recommend the roadmap of the technology that suits
        you best
      </Heading>
      <Div>
        <Button size="large">Start Assessment</Button>
      </Div>
    </Row>
  );
}

function Assessment() {
  return (
    <>
      <TopLeft>
        <Logo />
      </TopLeft>
      <TopRight>
        <UserAvatar />
        <DarkModeToggle />
      </TopRight>
      <Container>
        <PageHeading>Interactive Assessment 📃</PageHeading>
        <PageContent>
          {/* <StartScreen /> */}
          <InteractiveAssessment />
        </PageContent>
      </Container>
    </>
  );
}

export default Assessment;
