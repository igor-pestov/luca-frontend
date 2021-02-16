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
import AddQuestion from "./page/Questions/AddQuestion/AddQuestion"

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="contetnt">
        <Header />
          <Switch>
            <Route exact path="/comunidad" component={AddQuestion}>
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
