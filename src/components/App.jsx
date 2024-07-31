import { ThemeProvider } from "styled-components";
import FontsHelmet from "./FontsHelmet";
import { GlobalStyle } from "./GlobalStyle";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import { useTheme } from "../context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import { theme } from "../theme/theme";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const Team = lazy(() => import("../pages/Team/Team"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const { isDarkTheme } = useTheme();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/landing_team/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <HelmetProvider>
      <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
        <GlobalStyle />
        <FontsHelmet />
        <ToastContainer />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
