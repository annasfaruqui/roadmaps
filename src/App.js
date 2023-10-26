import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";

// HomePage pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesPage from "./pages/ArticlesPage";
import TeamPage from "./pages/TeamPage";
import AssessmentPage from "./pages/AssessmentPage";

// Sign in and login pages
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// After login pages(in protected Route)
import DashboardPage from "./pages/DashboardPage";
import AccountPage from "./pages/AccountPage";

// Some other pages
import PageNotFound from "./pages/PageNotFound";

import PersonalizedRoadmaps from "./components/PersonalizedRoadmaps";
import RoadMapPage from "./components/Roadmaps/RoadMapPage";

import TestRoadmap from "./features/roadmaps/TestRoadmap";

import LandingPageLayout from "./ui/LandingPageLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";

import { DarkModeProvider } from "./context/DarkModeContext";
import AllRoadmapsPage from "./pages/AllRoadmapsPage";

// Used to set up Cache behind the scenes
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />

            <Route element={<LandingPageLayout />}>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/team" element={<TeamPage />} />
            </Route>

            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/roadmaps" element={<AllRoadmapsPage />} />
              {/* <Route path="/roadmaps" element={<PersonalizedRoadmaps />} /> */}

              {/* <Route path="/roadmaps/:roadmap" element={<RoadMapPage />} /> */}
              {/* <Route path="/roadmaps/:roadmap" element={<TestRoadmap />} /> */}
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
