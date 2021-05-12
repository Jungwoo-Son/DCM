import AuthenticationWrapper from "./AuthenticationWrapper";
import * as S from "./style";
const Header = () => {
  return (
    <S.Header>
      <S.HeaderContentWrapper>
        <S.Logo>DCM</S.Logo>
        <AuthenticationWrapper />
      </S.HeaderContentWrapper>
    </S.Header>
  );
};

export default Header;
