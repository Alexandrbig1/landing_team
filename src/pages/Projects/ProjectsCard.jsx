/* eslint-disable react/prop-types */
import {
  ProjectApiIcon,
  ProjectApiIconWrapper,
  ProjectFigmaIcon,
  ProjectFigmaIconWrapper,
  ProjectGithubIcon,
  ProjectGithubIconWrapper,
  ProjectsIcons,
  ProjectsItems,
  ProjectsMenu,
} from "./ProjectsCard.styled";
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
        <ProjectsIcons>
          {items?.repoFront && (
            <li>
              <a
                href={items?.repoFront}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${items.title} front-end repository`}
                title={`Open ${items.title} front-end repository`}
              >
                <ProjectGithubIconWrapper>
                  <ProjectGithubIcon />
                </ProjectGithubIconWrapper>
              </a>
            </li>
          )}
          {items?.repoBack && (
            <li>
              <a
                href={items?.repoBack}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${items.title} back-end repository`}
                title={`Open ${items.title} back-end repository`}
              >
                <ProjectGithubIconWrapper>
                  <ProjectGithubIcon />
                </ProjectGithubIconWrapper>
              </a>
            </li>
          )}
          {items?.design && (
            <li>
              <a
                href={items?.design}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${items.title} Figma design`}
                title={`Open ${items.title} Figma design`}
              >
                <ProjectFigmaIconWrapper>
                  <ProjectFigmaIcon />
                </ProjectFigmaIconWrapper>
              </a>
            </li>
          )}
          {items?.api && (
            <li>
              <a
                href={items?.api}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${items.title} Swagger documentation`}
                title={`Open ${items.title} Swagger documentation`}
              >
                <ProjectApiIconWrapper>
                  <ProjectApiIcon />
                </ProjectApiIconWrapper>
              </a>
            </li>
          )}
        </ProjectsIcons>
      </ProjectsCard>
      <ProjectsImgWrapper
        href={items?.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${items?.title} website`}
        title={`Open ${items?.title} website`}
      >
        <picture>
          <source srcSet={items?.webpImg} type="image/webp" />
          <ProjectsImage src={items?.img} alt={items?.title} loading="lazy" />
        </picture>
      </ProjectsImgWrapper>
    </ProjectsCardWrapper>
  );
}

export default ProjectsCardItem;
