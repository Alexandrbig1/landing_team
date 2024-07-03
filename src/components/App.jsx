import { ThemeProvider } from "styled-components";
import FontsHelmet from "./FontsHelmet";
import { GlobalStyle } from "./GlobalStyle";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import { useTheme } from "../context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
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

const theme = {
  light: {
    colors: {
      mainBgColor: "#606c38",
      mainBgColorRev: "#283618",
      accentColor: "#283618",
      accentLightColor: "#606c38",
      btnHoverColor: "#588157",
      mainBgColorLowOp: "#606c3830",
      mainTextColor: "#e7e5e4",
      darkTextColor: "#292524",
      mainTextColorRev: "#292524",
      secondaryTextColor: "#020617",
      teamSecondaryTextColor: "#f5f5f590",
      footerTextColor: "rgba(239, 237, 232, 0.3)",
      burgerMenuFooterTextColor: "rgba(16, 18, 23, 0.3)",
      headerTextColor: "#e7e5e4",
      headerTextColorLowOp: "rgba(2, 6, 23, 0.1)",
      headerBgColor: "#f5f5f5",
      whiteColor: "#f5f5f5",
      whiteColorLowOp: "#f5f5f540",
      thumbBgColor: "#58815730",
      thumbColor: "#58815750",
      modalColor: "#333d29",
      greyColor: "#7f7f7f",
      burgerOverlay: "rgb(250, 250, 250,0.9)",
      boxShadowColor: "#affc41",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#283618",
      mainBgColorRev: "#606c38",
      accentColor: "#283618",
      accentLightColor: "#606c38",
      btnHoverColor: "#588157",
      mainBgColorLowOp: "#28361830",
      mainTextColor: "#292524",
      darkTextColor: "#292524",
      mainTextColorRev: "#e7e5e4",
      secondaryTextColor: "#f5f5f5",
      teamSecondaryTextColor: "#f5f5f590",
      footerTextColor: "rgba(239, 237, 232, 0.3)",
      burgerMenuFooterTextColor: "rgba(239, 237, 232, 0.3)",
      headerTextColor: "#e7e5e4",
      headerTextColorLowOp: "rgba(245, 245, 245, 0.1)",
      headerBgColor: "#f5f5f5",
      whiteColor: "#f5f5f5",
      whiteColorLowOp: "#f5f5f540",
      thumbBgColor: "#58815730",
      thumbColor: "#58815750",
      modalColor: "#333d29",
      greyColor: "#7f7f7f",
      burgerOverlay: "rgb(36, 36, 36,0.9)",
      boxShadowColor: "#affc41",
    },
  },
};

function App() {
  const { isDarkTheme } = useTheme();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/landing_team/"
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
