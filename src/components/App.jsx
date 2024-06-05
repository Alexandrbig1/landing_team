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
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const theme = {
  light: {
    colors: {
      mainBgColor: "#cce4ff",
      mainTextColor: "#f5f5f5",
      headerTextColor: "#020617",
      headerTextColorLowOp: "rgba(2, 6, 23, 0.1)",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#383a3e",
      mainTextColor: "#020617",
      headerTextColor: "#f5f5f5",
      headerTextColorLowOp: "rgba(245, 245, 245, 0.1)",
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
