import * as S from "./style";
const InputUserDataPair = ({ name, title, value, setValue }) => {
  return (
    <S.InputUserDataContent>
      <S.InputUserDataTitle>{title}</S.InputUserDataTitle>
      <S.InputUserData
        name={name}
        placeholder={title}
        value={value}
        onChange={setValue}
      ></S.InputUserData>
    </S.InputUserDataContent>
  );
};
export default InputUserDataPair;
