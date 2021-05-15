import MainBackground from "../mainBackground/MainBackground";
import CreationProject from "./CreationProject";
import Project from "./Project";
import * as S from "./style";

const ProjectBoard = ({ children }) => {
  return (
    <MainBackground>
      <S.ProjectBoardContent>
        <S.Title>Projects</S.Title>
        <S.Projects>
          <CreationProject name="sdf"></CreationProject>
          {children}
        </S.Projects>
      </S.ProjectBoardContent>
    </MainBackground>
  );
};

export default ProjectBoard;
