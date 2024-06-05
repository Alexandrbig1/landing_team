import { Suspense } from "react";
import { Outlet } from "react-router";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";

// eslint-disable-next-line react/prop-types
function RootLayout() {
  // function RootLayout({ toggleTheme, isDarkTheme }) {
  return (
    <div>
      <Header />
      {/* <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default RootLayout;
