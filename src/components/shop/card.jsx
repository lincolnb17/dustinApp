import React from "react";
import "./card.css"
const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards container">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p className="price">Price - Rs {price} /kg</p>
        <button type="button" class="btn btn-success" onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
