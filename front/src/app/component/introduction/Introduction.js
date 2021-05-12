import { Link } from "react-router-dom";
import * as S from "./style";
import Image from "../../../assets/DescriptionImage.png";

const Introduction = ({ linkToSignUp }) => {
  return (
    <S.Introduction>
      <S.DescriptionImg src={Image} />
      <S.BigDescription>프로젝트 의존성 관리툴</S.BigDescription>
      <S.SmallDescription>
        복잡한 프로젝트에서 효율적인 의사소통을 위한 최고의 선택
        <br />
        프로젝트에서 복잡한 구성요소간 관계와 담당자를 빠르게 관리할 수
        있습니다.
      </S.SmallDescription>
      <Link to={linkToSignUp}>
        <S.SignUpBtn>회원가입</S.SignUpBtn>
      </Link>
    </S.Introduction>
  );
};

export default Introduction;
