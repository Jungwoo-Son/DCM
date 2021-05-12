import * as S from "./style";
const InputUserDataPair = ({ title }) => {
  return (
    <S.InputUserDataContent>
      <S.InputUserDataTitle>{title}</S.InputUserDataTitle>
      <S.InputUserData placeholder={title}></S.InputUserData>
    </S.InputUserDataContent>
  );
};
export default InputUserDataPair;
