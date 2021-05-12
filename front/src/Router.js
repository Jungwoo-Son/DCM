import { Route, Switch } from "react-router-dom";
import MainPage from "./app/page/main/MainPage";
const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  );
};

export default AppRouter;
