import { Suspense } from "react";
import { Outlet } from "react-router";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Main } from "../components/layout";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import ScrollBtn from "../components/UI/ScrollBtn/ScrollBtn";

// eslint-disable-next-line react/prop-types
function RootLayout() {
  return (
    <div>
      <Header />
      <MenuBurger />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <ScrollBtn />
      <Footer />
    </div>
  );
}

export default RootLayout;
