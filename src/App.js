import React from "react";
import { BrowserRouter as Routert, Route, Switch } from "react-router-dom";
import "./styles.css";
import home from "./pages/home";
import login from "./pages/login";

export default function App() {
  return (
    <div className="App">
      <Routert>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={login} />
        </Switch>
      </Routert>
    </div>
  );
}
