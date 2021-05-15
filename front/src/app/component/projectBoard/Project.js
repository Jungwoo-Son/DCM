import * as S from "./style";

const Project = ({ projectData }) => {
  return (
    <S.Project>
      <S.ProjectThumbnailSection>
        <S.TextProjectThumbnail>{projectData.name[0]}</S.TextProjectThumbnail>
      </S.ProjectThumbnailSection>
      <S.ProejectNameSection>
        <S.ProejectName>{projectData.name}</S.ProejectName>
      </S.ProejectNameSection>
    </S.Project>
  );
};

export default Project;
