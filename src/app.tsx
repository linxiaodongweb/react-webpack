import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Templete from "./container/templete/templete";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Templete} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
