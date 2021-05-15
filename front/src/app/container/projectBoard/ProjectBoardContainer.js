import { useEffect, useState } from "react";
import { getProjectsOfUser } from "../../../lib/api";
import Project from "../../component/projectBoard/Project";
import ProjectBoard from "../../component/projectBoard/ProjectBoard";

const ProjectBoardContainter = () => {
  const [projects, setProjects] = useState([]);

  useEffect(
    () =>
      (async () => {
        const userId = localStorage.getItem("userId");
        const projects = await getProjectsOfUser(userId);
        setProjects(projects);
      })(),
    [projects.map((project) => project.id)]
  );

  const projectsComponents = projects.map((projectData) => (
    <Project key={projectData.id} projectData={projectData} />
  ));
  return (
    <>
      <ProjectBoard>{projectsComponents}</ProjectBoard>
    </>
  );
};

export default ProjectBoardContainter;
