import styled from "styled-components";

export const RegisterContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 38.38rem;

  padding: 4rem 0 4rem 0;

  background-color: #fefefe;

  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
`;
export const InputCardTitle = styled.span`
  font-size: 1.875rem;
`;
export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  width: 100%;
  padding: 0 6.25rem 0 6.25rem;
`;
export const InputUserDataContent = styled.div`
  margin-top: 2.5rem;
`;
export const InputUserDataTitle = styled.span`
  font-size: 1.25rem;
`;
export const InputUserData = styled.input`
  width: 100%;
  height: 2.25rem;

  box-sizing: border-box;
  margin-top: 0.625rem;
  padding: 0 1rem 0 1rem;

  border: 1px solid #c0c0c0;
  border-radius: 1.125rem;

  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
`;
export const RegisterBtn = styled.button`
  margin-top: 3rem;
  width: 10.88rem;
  height: 2.25rem;

  border: none;
  border-radius: 1.125rem;
  background-color: #00bfff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);

  font-size: 1.25rem;
  color: #ffffff;
  font-weight: bold;

  cursor: pointer;
`;
