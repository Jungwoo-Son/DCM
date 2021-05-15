import styled from "styled-components";

export const ProjectBoardContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 73.125rem;
  height: 42.125rem;
`;
export const Title = styled.div`
  margin-top: 5rem;

  width: 100%;

  font-size: 2.5rem;
  font-weight: bold;
`;
export const Projects = styled.div`
  display: flex;

  margin-top: 5rem;
`;
export const CreationProject = styled.div``;
export const Project = styled.div`
  margin-left: 1.875rem;
`;
export const ProjectThumbnailSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10.625rem;
  height: 10.625rem;

  border-bottom: 0.5px solid #707070;
  border-radius: 5px 5px 0 0;

  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.36);
  background-color: #ffffff;
`;
export const TextProjectThumbnail = styled.span`
  text-align: center;
  font-size: 4.375rem;
  font-weight: bold;
`;
export const ProejectNameSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10.625rem;
  height: 1.875rem;

  border-top: 0.5px solid #707070;
  border-radius: 0 0 5px 5px;

  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.36);
  background-color: #ffffff;
`;
export const ProejectName = styled.span`
  text-align: center;
  font-size: 0.875rem;
  font-weight: bold;
`;
