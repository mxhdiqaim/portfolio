import React, { useState, useEffect } from "react";
import "./project-card.styles.scss";
import GithubIcon from "../../assets/icons/github.svg";
import CustomLink from "../../components/custom-link/custom-link.component";

const ProjectCard = (project) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [shouldParallax, setShouldParallax] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setShouldParallax(window.innerWidth > 992 ? true : false);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(parseInt(window.scrollY));
          ticking = false;
        });

        ticking = true;
      }
    };

    let ticking = false;

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  // return <p>Hello</p>;

  return (
    <div
      className="project-card"
      style={
        project.index % 2 === 0 && shouldParallax
          ? {
              transform: `translateY(-${scrollPosition * 0.05}px)`,
            }
          : {}
      }
    >
      <p className="project-language">{project.project.lang}</p>
      <h3 className="project-name">{project.project.title}</h3>
      <p className="project-description">{project.project.description}</p>
      <footer className="card-footer">
        <ul>
          <li>
            <CustomLink icon={<GithubIcon />} text="Github" href={project.project.link} />
          </li>
          <li>
            <CustomLink icon={<div />} text="Preview" href={project.project.preview} />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default ProjectCard;
