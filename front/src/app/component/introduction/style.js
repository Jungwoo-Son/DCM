import styled from "styled-components";

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(to bottom right, #00ffcb, #03a6dc);
`;
export const DescriptionImg = styled.img`
  margin-top: 70px;

  width: 30rem;
  height: 12.06rem;
`;
export const BigDescription = styled.span`
  text-align: center;

  margin-top: 20px;

  font-size: 4.625rem;
  color: #ffffff;
  font-weight: bold;
`;
export const SmallDescription = styled.span`
  text-align: center;

  margin-top: 1.4375rem;

  font-size: 1.25rem;
  color: #666666;
  font-weight: bold;
`;
export const SignUpBtn = styled.button`
  margin: 4.5rem 0 6.563rem 0;

  width: 10.88rem;
  height: 2.25rem;

  border: none;
  border-radius: 1.125rem;
  background-color: #ffffff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);

  font-size: 1.25rem;
  color: #00bfff;
  font-weight: bold;
`;
