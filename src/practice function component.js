// Practice function componet
import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://cdn.imweb.me/upload/S201905105cd4e5325582d/0b667240284bd.jpg",
      rating: 5
  },
  {
    id: 2,
    name: "Samgyeosal",
    image:
      "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
      rating: 4.9
  },
  {
    id: 3,
    name: "Ramen",
    image:
      "https://post-phinf.pstatic.net/MjAxODAyMDVfNDAg/MDAxNTE3NzkzMzYwNjQz.fqaN8BhckNlQsH-W6I8OIy2ZsA76pAhkVjtFNa0TEw8g.G8FVDa92ISHCm0kEcJHupls7ObpE9IGIYKXw9SFgUBAg.JPEG/image_6921511681517793230752.jpg?type=w1200",
      rating: 4.8
  },
  {
    id: 4,
    name: "Chicken",
    image:
      "https://rereco.co/wp-content/uploads/2018/02/best_menu09.jpg",
      rating: 4.7
  },
  {
    id: 5,
    name: "salmon",
    image:
      "https://snaptime.edaily.co.kr/wp-content/uploads/2018/04/twi001t1684476-e1525936257331.jpg",
      rating: 4.6
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
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
