import React from 'react';
import PropTypes from 'prop-types';


const foodILike = [
  {
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  rating : 5
  },
  {
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  rating : 4.7
  }
];

function Food({name, image, rating}){
  console.log(name, image);
  return(
    <div>
      <h1>{ name }</h1> 
      <h4>{rating}/5.0</h4>
      <img src={image}></img>
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodILike.map(result => <Food 
      name = {result.name} 
      image = {result.image}
      rating = {result.rating}
      />)}
    </div>
  );
}

export default App;
