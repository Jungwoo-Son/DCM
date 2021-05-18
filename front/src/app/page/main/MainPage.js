import HeaderContainer from "../../container/header/HeaderCotainer";
import IntroductionContainer from "../../container/introduction/IntroductionContainer";
import ProjectBoardContainter from "../../container/projectBoard/ProjectBoardContainer";

const MainPage = () => {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <>
      <HeaderContainer />
      {accessToken ? <ProjectBoardContainter /> : <IntroductionContainer />}
    </>
  );
};

export default MainPage;
