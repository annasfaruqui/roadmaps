import { createContext, useContext, useEffect, useReducer } from "react";

const AssessmentContext = createContext();

const initialState = {
  questions: [],

  // Different loading  status:"loading","error","ready","active","finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        status: "active",
      };

    default:
      throw new Error("Unknown action");
  }
}

function AssessmentProvider({ children }) {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(function () {
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3002/questions");
        const data = await res.json();

        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
        console.error(err);
      }
    }
    loadData();
  }, []);

  return (
    <AssessmentContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        numQuestions,
        dispatch,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

function useAssessment() {
  const context = useContext(AssessmentContext);

  if (context === undefined)
    throw new Error(
      "AssessmentContext was used outside the AssessmentProvider component"
    );

  return context;
}

export { useAssessment, AssessmentProvider };
