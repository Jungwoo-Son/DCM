import * as S from "./style";

const Project = ({ name }) => {
  return (
    <S.Project>
      <S.ProjectThumbnailSection>
        <S.TextProjectThumbnail>{name[0]}</S.TextProjectThumbnail>
      </S.ProjectThumbnailSection>
      <S.ProejectNameSection>
        <S.ProejectName>{name}</S.ProejectName>
      </S.ProejectNameSection>
    </S.Project>
  );
};

export default Project;
