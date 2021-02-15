import React from "react";
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
        <Quetions />
      </div>
    </div>
  );
}

export default App;
