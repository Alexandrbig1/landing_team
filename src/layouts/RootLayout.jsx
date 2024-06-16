import { Suspense } from "react";
import { Outlet } from "react-router";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Main } from "../components/layout";
import MenuBurger from "../components/MenuBurger/MenuBurger";

// eslint-disable-next-line react/prop-types
function RootLayout() {
  // function RootLayout({ toggleTheme, isDarkTheme }) {
  return (
    <div>
      <Header />
      <MenuBurger />
      {/* <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */}
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
}

export default RootLayout;
