import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./style.css";
import GlobalStyles from "./styles/GlobalStyles";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import AssessmentPage from "./pages/AssessmentPage";
import ArticlesPage from "./pages/ArticlesPage";
import Testimonials from "./pages/Testimonials";
import PageNotFound from "./pages/PageNotFound";

import Assessment from "./features/assessment/Assessment";

import PersonalizedRoadmaps from "./components/PersonalizedRoadmaps";
import RoadMap from "./components/Roadmaps/RoadMap";

import AppLayout from "./ui/AppLayout";
import AppLayoutOutside from "./ui/AppLayoutOutside";
import ProtectedRoute from "./ui/ProtectedRoute";

import { DarkModeProvider } from "./context/DarkModeContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<HomePage />} />

            <Route path="/signup" element={<User />} />
            <Route path="/login" element={<Login />} />

            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/assessment-home" element={<AssessmentPage />} />
              <Route path="/account" element={<Account />} />
              <Route path="/roadmaps" element={<PersonalizedRoadmaps />} />
              <Route path="/roadmaps/:roadmap" element={<RoadMap />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Route>

            <Route
              element={
                <ProtectedRoute>
                  <AppLayoutOutside />
                </ProtectedRoute>
              }
            >
              <Route element={<Navigate replace to="assessment" />} />
              <Route path="/assessment" element={<Assessment />} />
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
