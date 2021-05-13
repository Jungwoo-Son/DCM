import InputUserDataPair from "./InputUserDataPair";
import * as S from "./style";

const Register = ({ userData, setUserData, onRegisterBtnClick }) => {
  return (
    <S.RegisterContent>
      <S.InputCard>
        <S.InputCardTitle>사용자 정보 입력하기</S.InputCardTitle>
        <S.InputsWrapper>
          <InputUserDataPair
            name="id"
            title="ID"
            value={userData?.id}
            setValue={setUserData}
          />
          <InputUserDataPair
            name="pw"
            title="PW"
            value={userData?.pw}
            setValue={setUserData}
          />
          <InputUserDataPair
            name="username"
            title="사용자 이름"
            value={userData?.username}
            setValue={setUserData}
          />
          <InputUserDataPair
            name="contact"
            title="연락처"
            contact={userData?.contact}
            setValue={setUserData}
          />
        </S.InputsWrapper>
        <S.RegisterBtn onClick={onRegisterBtnClick}>회원가입</S.RegisterBtn>
      </S.InputCard>
    </S.RegisterContent>
  );
};

export default Register;
