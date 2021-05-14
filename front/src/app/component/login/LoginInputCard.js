import InputUserDataPair from "./InputUserDataPair";
import * as S from "./style";
const LoginInputCard = ({ userData, setUserData, onLoginBtnClick }) => {
  return (
    <S.LoginInputCard>
      <S.InputCardTitle>로그인</S.InputCardTitle>
      <S.InputsWrapper>
        <InputUserDataPair
          name="id"
          title="ID"
          value={userData.id}
          setValue={setUserData}
        />
        <InputUserDataPair
          name="pw"
          title="PW"
          value={userData.pw}
          setValue={setUserData}
        />
      </S.InputsWrapper>
      <S.LoginBtn onClick={onLoginBtnClick}>로그인</S.LoginBtn>
    </S.LoginInputCard>
  );
};

export default LoginInputCard;
