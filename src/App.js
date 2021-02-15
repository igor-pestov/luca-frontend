import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import "./App.scss";
import Quetions from "./page/Questions/Questions";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="contetnt">
        <Header />
          <Switch>
            <Route exact path="/comunidad" component={Quetions}>
            </Route>
            <Route  path="/" >
              <h1>Page mi plan de estudios</h1>
            </Route>
            <Route path="/quizzes" >
              <h1>Page quizzes</h1>
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
