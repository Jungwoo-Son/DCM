import HeaderContainer from "../../container/header/HeaderCotainer";
import RegisterContainer from "../../container/register/RegisterContainer";
import * as S from "./style";

const RegisterPage = () => {
  return (
    <>
      <HeaderContainer />
      <S.RegisterContainerWrapper>
        <RegisterContainer />
      </S.RegisterContainerWrapper>
    </>
  );
};

export default RegisterPage;
