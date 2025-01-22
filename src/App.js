import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

// HashRouter 와 BrowserRouter의 차이 : 경로에 #이 포함되는가의 여부 차이

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
