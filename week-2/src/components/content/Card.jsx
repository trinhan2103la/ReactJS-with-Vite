/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useCart } from "react-use-cart";

export default function Card(props) {
  const { addItem } = useCart();
  return (
    <div className="">
      <div className="card">
        <img
          src={props.img}
          alt=""
          style={{ width: "300px", height: "300px" }}
        />
        <div className="text-center text-2xl">
          <h3 className="p-1">{props.title}</h3>
          <p className="p-1">{props.desc}</p>
          <p className="p-1 text-cyan-700">
            <span>$</span>
            {props.price}
          </p>
          <button
            onClick={() => addItem(props.item)}
            className="bg-red-600 text-white cursor-pointer p-2 my-2 rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
