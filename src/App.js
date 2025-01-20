import React from "react";
// import Potato from './Potato';

// function Carrot() {
//   return <h3>I like Carrot</h3>;
// }

function Food (props) {
  return (
    <div>
      <h1>I like {props.favorit}</h1>
      <img src={props.picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function App() {
  return (
    <div>
      {/* <h1>Hello~~~!</h1> */}
      {foodILike.map(dish => (
        <Food favorit={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
