import React from "react";
import Potato from './Potato';

function Carrot() {
  return <h3>I like Carrot</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello~~~!</h1>
      <Potato />
      <Carrot />
    </div>
  );
}

export default App;
