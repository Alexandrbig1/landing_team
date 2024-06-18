import { Helmet, HelmetProvider } from "react-helmet-async";
import { NotFoundImg, NotFoundText, NotFoundWrapper } from "./NotFound.styled";

function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Seventh Sense - Page Not Found</title>
          <meta
            name="description"
            content="Oops! The page you are looking for does not exist. Return to the Seventh Sense homepage to explore our projects, meet our team, and learn more about our work in software engineering."
          />
          <meta
            name="keywords"
            content="Seventh Sense, 404, Page Not Found, error, missing page, software engineering, projects, team"
          />
        </Helmet>
      </HelmetProvider>
      <NotFoundWrapper>
        <NotFoundImg src="err.svg" alt="Error icon" />
        <NotFoundText>
          Seventh Sense is a team of computer science students specializing in
          software engineering, always striving to innovate and solve
          challenging problems. While we haven't cracked the code to make this
          page appear, we invite you to explore our other amazing projects and
          get to know our talented team.
        </NotFoundText>
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;
