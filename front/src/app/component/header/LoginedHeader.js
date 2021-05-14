import { Link } from "react-router-dom";
import * as S from "./style";
import Username from "./Username";

const LoginedHeader = ({ linkToMain, username }) => {
  return (
    <S.Header>
      <S.HeaderContentWrapper>
        <Link to={linkToMain}>
          <S.Logo>DCM</S.Logo>
        </Link>
        <Username username={username} />
      </S.HeaderContentWrapper>
    </S.Header>
  );
};

export default LoginedHeader;
