import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import "./App.scss";
import Quetions from "./page/Questions/Questions";
import AddQuestion from "./page/Questions/AddQuestion/AddQuestion";
import api from "./api/api";

function App() {
  const getUser = async () => {
    const data = await api.getUserInfo("602a611b7c1a98554dd376bf");
    localStorage.setItem("user", JSON.stringify(data.data));
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <Navigation />
      <div className="contetnt">
        <Header />
        <Switch>
          <Route path="/comunidad/add" component={AddQuestion}></Route>
          <Route exact path="/comunidad" component={Quetions}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
