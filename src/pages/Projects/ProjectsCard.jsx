/* eslint-disable react/prop-types */
import {
  ProjectsCardTitle,
  ProjectsCardWrapper,
  ProjectsImage,
  ProjectsImgWrapper,
  ProjectsText,
  ProjectsCard,
  ProjectsCardTitleWrapper,
  ProjectsCardNumber,
  ProjectsCardNumberWrapper,
} from "./Projects.styled";
import { ProjectsItems, ProjectsMenu } from "./ProjectsCard.styled";

function ProjectsCardItem({ items }) {
  return (
    <ProjectsCardWrapper>
      <ProjectsCard>
        <ProjectsCardTitleWrapper>
          <ProjectsCardTitle>{items.title}</ProjectsCardTitle>
          <ProjectsText>{items.description}</ProjectsText>
          <ProjectsCardNumberWrapper>
            <ProjectsCardNumber>{items.number}</ProjectsCardNumber>
          </ProjectsCardNumberWrapper>
        </ProjectsCardTitleWrapper>
        <ProjectsMenu>
          {items?.stack.map((item, idx) => (
            <ProjectsItems key={idx}>{item}</ProjectsItems>
          ))}
        </ProjectsMenu>
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
