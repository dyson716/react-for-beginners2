import React from "react";
import PropTypes from "prop-types";
// import Potato from './Potato';

// function Carrot() {
//   return <h3>I like Carrot</h3>;
// }

function Food (props) {
  return (
    <div>
      <h1>I like {props.name}</h1>
      <h4>{props.rating}/5.0</h4>
      <img src={props.picture} style={{ minWidth: "200px", maxWidth: "200px" }} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.5,
  }
]

function renderFood(dish) {
  return <Food key={dish.id} favorit={dish.name} picture={dish.image} />
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

  return (
    <div>
      {foodILike.map(dish=> (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
