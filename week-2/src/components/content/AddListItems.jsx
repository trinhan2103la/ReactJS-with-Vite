/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "react-use-cart";

export default function AddList() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className=" mt-7 text-center">Your Cart is Empty</h1>;

  return (
    <div className="px-[5%]">
      <div className="w-full">
        <h5>
          Cart ({totalUniqueItems}) - Total Items: ({totalItems})
        </h5>
        <table className="table-auto m-2 w-[80%] text-center">
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={item.img}
                      alt=""
                      style={{ width: "6rem", height: "6rem" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      className="bg-blue-400 size-10 rounded text-3xl ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="bg-blue-400 size-10 rounded text-3xl ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="bg-red-700  rounded ms-2 text-3xl"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row-reverse text-3xl my-3">
        <p>Total Price: {cartTotal}</p>
      </div>
    </div>
  );
}
