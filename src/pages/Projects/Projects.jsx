import {
  CustomPagination,
  PaginationWrapper,
  ProjectsArrowLeft,
  ProjectsArrowRight,
  ProjectsArrowWrapper,
  ProjectsBtn,
  ProjectsBtnRight,
  ProjectsCard,
  ProjectsCardTitle,
  ProjectsCardWrapper,
  ProjectsContainer,
  ProjectsImage,
  ProjectsImgWrapper,
  ProjectsText,
  ProjectsWrapper,
} from "./Projects.styled";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectsCardItem from "./ProjectsCard";
import projectsData from "../../data/projects.json";
import { useState } from "react";

function Projects() {
  // const [projects, setProjects] = useState([0]);

  const swiper = useSwiper();

  // const handleSlideChange = (swiper) => {
  //   console.log("slide changed");
  //   const currentIdx = swiper.activeIndex;
  //   setProjects(projects[currentIdx]);
  // };
  return (
    <ProjectsContainer>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        // cssMode={true}
        // navigation={true}
        // pagination={true}
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
