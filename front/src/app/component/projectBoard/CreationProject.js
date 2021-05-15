import * as S from "./style";
import Image from "../../../assets/PlusSign.svg";

const CreationProject = ({ name }) => {
  return (
    <S.CreationProject>
      <S.ProjectThumbnailSection>
        <img src={Image}></img>
      </S.ProjectThumbnailSection>
      <S.ProejectNameSection>
        <S.ProejectName>{name}</S.ProejectName>
      </S.ProejectNameSection>
    </S.CreationProject>
  );
};

export default CreationProject;
