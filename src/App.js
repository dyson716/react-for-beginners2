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
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    id: 2,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function renderFood(dish) {
  return <Food id={dish.id} favorit={dish.name} picture={dish.image} />
}

function App() {
  /*
  return (
    <div>
      {foodILike.map(dish => (
        <Food favorit={dish.name} picture={dish.image} />
      ))}
    </div>
  );
  */

  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
