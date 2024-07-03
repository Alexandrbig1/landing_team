import { Helmet } from "react-helmet-async";

const FontsHelmet = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default FontsHelmet;
