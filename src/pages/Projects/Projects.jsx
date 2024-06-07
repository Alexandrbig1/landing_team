import {
  ProjectsCard,
  ProjectsCardTitle,
  ProjectsCardTitleWrapper,
  ProjectsContainer,
  ProjectsImage,
  ProjectsImgWrapper,
  ProjectsText,
  ProjectsWrapper,
} from "./Projects.styled";

function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsCardTitle>Your Energy</ProjectsCardTitle>
          <ProjectsText>
            Welcome to "Your Energy," an innovative fitness project designed by
            the Seventh Sense team to help you achieve your health and fitness
            goals. Whether you're looking to get in shape, stay healthy, or
            transform your physique, "Your Energy" provides comprehensive
            fitness and nutrition support tailored to your needs.
          </ProjectsText>
          <div>
            <span>stack:</span>
          </div>
        </ProjectsCard>
        <ProjectsImgWrapper
          href="https://alexandrbig1.github.io/your-energy-fitness-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectsImage src="/public/images/fit.jpg" alt="" />
        </ProjectsImgWrapper>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
