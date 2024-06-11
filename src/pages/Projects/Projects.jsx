import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectsCardItem from "./ProjectsCard";
import projectsData from "../../data/projects.json";
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
  );
}

export default Projects;
