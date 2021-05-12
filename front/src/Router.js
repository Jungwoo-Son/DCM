import { Route, Switch } from "react-router-dom";
import MainPage from "./app/page/main/MainPage";
import RegisterPage from "./app/page/register/RegisterPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/signup" component={RegisterPage} />
    </Switch>
  );
};

export default AppRouter;
