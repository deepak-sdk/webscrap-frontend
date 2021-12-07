import React, { useContext } from "react";
import "./amazon.css";
import AppContext from "../../UseContext/use-context";

function Amazon({updateCart}) {
  const [data] = useContext(AppContext);
  // console.log(data)

 

  return (
    <div className="elaunch-container">
      <div className="elaunch-amazon-products">
        <div className="elaunch-amazon-products-title">
          <h3>Amazon</h3>
          <select>
            <option>All</option>
            <option>Electronics</option>
            <option>Computers Accessories</option>
            <option>Cloths</option>
            <option>Movies</option>
            <option>Games</option>
          </select>
        </div>
        <div className="elaunch-amazon-products-cards-carousel">
          {data.map((val) => (
            <div className="elaunch-amazon-products-cards">
              <img src={val.product_media.image} alt="" />
              <div className="elaunch-amazon-products-details">
                <p>{val.product_name}</p>
                <p>Price: ₹{val.product_price}</p>
                <button onClick={updateCart}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Amazon;
