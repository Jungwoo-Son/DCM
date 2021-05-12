import InputUserDataPair from "./InputUserDataPair";
import * as S from "./style";

const Register = () => {
  return (
    <S.RegisterContent>
      <S.InputCard>
        <S.InputCardTitle>사용자 정보 입력하기</S.InputCardTitle>
        <S.InputsWrapper>
          <InputUserDataPair title="ID" />
          <InputUserDataPair title="PW" />
          <InputUserDataPair title="사용자 이름" />
          <InputUserDataPair title="연락처" />
        </S.InputsWrapper>
        <S.RegisterBtn>회원가입</S.RegisterBtn>
      </S.InputCard>
    </S.RegisterContent>
  );
};

export default Register;
