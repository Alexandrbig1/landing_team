import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Seventh Sense - Home Page</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
      </HelmetProvider>
      <div>
        <Hero />
      </div>
    </>
  );
}

export default Home;
