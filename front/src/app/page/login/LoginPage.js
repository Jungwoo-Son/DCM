import HeaderContainer from "../../container/header/HeaderCotainer";
import LoginContainer from "../../container/login/LoginContainer";

import * as S from "./style";

const LoginPage = () => {
  return (
    <>
      <HeaderContainer />
      <S.LoginContainerWrapper>
        <LoginContainer />
      </S.LoginContainerWrapper>
    </>
  );
};

export default LoginPage;
