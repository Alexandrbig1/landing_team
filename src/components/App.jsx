import { ThemeProvider } from "styled-components";
import FontsHelmet from "./FontsHelmet";
import { GlobalStyle } from "./GlobalStyle";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Home = lazy(() => import("../pages/Home/Home"));
const Team = lazy(() => import("../pages/Team/Team"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const theme = {
  light: {
    colors: {
      mainBgColor: "#606c38",
      mainBgColorLowOp: "#606c3830",
      mainTextColor: "#e7e5e4",
      secondaryTextColor: "#020617",
      footerTextColor: "rgba(239, 237, 232, 0.3)",
      // headerTextColor: "#292524",
      headerTextColor: "#e7e5e4",
      headerTextColorLowOp: "rgba(2, 6, 23, 0.1)",
      headerBgColor: "#f5f5f5",
      thumbBgColor: "#58815730",
      thumbColor: "#58815750",
      modalColor: "#333d29",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#283618",
      mainBgColorLowOp: "#28361830",
      mainTextColor: "#292524",
      secondaryTextColor: "#f5f5f5",
      footerTextColor: "rgba(239, 237, 232, 0.3)",
      headerTextColor: "#e7e5e4",
      headerTextColorLowOp: "rgba(245, 245, 245, 0.1)",
      headerBgColor: "#f5f5f5",
      thumbBgColor: "#58815730",
      thumbColor: "#58815750",
      modalColor: "#333d29",
    },
  },
};

function App() {
  const { isDarkTheme } = useTheme();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout />
          // <RootLayout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        }
      >
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <FontsHelmet />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
