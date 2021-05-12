import { Link } from "react-router-dom";
import AuthenticationWrapper from "./AuthenticationWrapper";
import * as S from "./style";
const Header = ({ linkToMain, linkToLogin, linkToSignUp }) => {
  return (
    <S.Header>
      <S.HeaderContentWrapper>
        <Link to={linkToMain}>
          <S.Logo>DCM</S.Logo>
        </Link>
        <AuthenticationWrapper
          linkToLogin={linkToLogin}
          linkToSignUp={linkToSignUp}
        />
      </S.HeaderContentWrapper>
    </S.Header>
  );
};

export default Header;
