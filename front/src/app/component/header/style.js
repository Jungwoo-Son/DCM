import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  justify-content: center;

  height: 5rem;

  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;
export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 73.125rem;
`;
export const Logo = styled.span`
  font-family: "Segoe UI";
  color: #00bfff;
  font-size: 1.875rem;
  font-weight: bold;
`;
export const AuthenticationWrapper = styled.div`
  display: flex;
`;
export const Login = styled.div`
  margin-right: 1.25rem;

  white-space: noowrap;
`;
export const Divider = styled.div`
  width: 1px;

  background-color: #000000;
`;
export const SingUp = styled.div`
  margin-left: 1.25rem;
`;
export const Username = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;
