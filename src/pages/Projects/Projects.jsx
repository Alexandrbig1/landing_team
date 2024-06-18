import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectsCardItem from "./ProjectsCard";
import projectsData from "../../data/projects.json";
import { Container } from "../../components/layout";
import {
  CustomPagination,
  PaginationWrapper,
  ProjectsArrowLeft,
  ProjectsArrowRight,
  ProjectsArrowWrapper,
  ProjectsBtn,
  ProjectsBtnRight,
  ProjectsContainer,
} from "./Projects.styled";

function Projects() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Seventh Sense - Projects Page</title>
          <meta
            name="description"
            content="Explore the innovative projects by Seventh Sense, a team of computer science students specializing in software engineering. Discover our diverse range of projects, from web development to cutting-edge technology solutions."
          />
          <meta
            name="keywords"
            content="Seventh Sense, projects, computer science, software engineering, web development, technology solutions, student projects, innovation, coding, tech community"
          />
        </Helmet>
      </HelmetProvider>
      <Container>
        <ProjectsContainer>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            mousewheel={false}
            keyboard={true}
            modules={[Navigation, Pagination, Keyboard]}
          >
            {projectsData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ProjectsCardItem items={item} />
              </SwiperSlide>
            ))}
            <PaginationWrapper>
              <ProjectsArrowWrapper>
                <ProjectsBtn className="prev">
                  <ProjectsArrowLeft />
                </ProjectsBtn>
                <ProjectsBtnRight className="next">
                  <ProjectsArrowRight />
                </ProjectsBtnRight>
              </ProjectsArrowWrapper>
              <CustomPagination className="pagination" />
            </PaginationWrapper>
          </Swiper>
        </ProjectsContainer>
      </Container>
    </>
  );
}

export default Projects;
