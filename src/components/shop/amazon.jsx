import React, { useState } from "react";
import list from "../../data/data"
import Cards from "./card";
import "./amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <div><div className="headline">Our Fertilizers</div>
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      
    </section>
    </div>
  );
};

export default Amazon;
