import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Seventh Sense - Home Page</title>
          <meta
            name="description"
            content="Seventh Sense is a team of passionate computer science students specializing in software engineering. Explore our projects, meet our team, and discover innovative solutions to today's challenges. Join us in our journey of continuous learning and excellence."
          />
          <meta
            name="keywords"
            content="Seventh Sense, computer science, software engineering, student projects, technology, innovation, collaborative projects, coding, tech community, continuous learning"
          />
        </Helmet>
      </HelmetProvider>
      <div>
        <Hero />
      </div>
    </>
  );
}

export default Home;
