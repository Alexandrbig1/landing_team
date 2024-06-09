/* eslint-disable react/prop-types */
import {
  ProjectsCardTitle,
  ProjectsCardWrapper,
  ProjectsImage,
  ProjectsImgWrapper,
  ProjectsText,
  ProjectsCard,
} from "./Projects.styled";

function ProjectsCardItem({ items }) {
  return (
    <ProjectsCardWrapper>
      <ProjectsCard>
        <ProjectsCardTitle>{items.title}</ProjectsCardTitle>
        <ProjectsText>{items.description}</ProjectsText>
        <div>
          <span>number: {items.number}</span>
        </div>
      </ProjectsCard>
      <ProjectsImgWrapper
        href="https://alexandrbig1.github.io/your-energy-fitness-app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectsImage src={items.img} alt="" />
      </ProjectsImgWrapper>
    </ProjectsCardWrapper>
  );
}

export default ProjectsCardItem;
