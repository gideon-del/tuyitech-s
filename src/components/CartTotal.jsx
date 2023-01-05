import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAllItem } from "../store/cartSlice";

const CartTotal = ({ totalAmount }) => {
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(deleteAllItem());
  };
  return (
    <div className="font-semibold">
      <h1 className="text-center  text-3xl mb-4">
        Total:{" "}
        <span className="text-green-900 font-bold">
          ₦{Intl.NumberFormat("en-US").format(totalAmount)}
        </span>
      </h1>
      <div className="flex mx-auto w-fit gap-4">
        <Link className="p-5 bg-blue-800 rounded-md text-white" to="/order">
          Place Order🤑
        </Link>
        <button
          className="p-5 bg-red-600 rounded-md text-white"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
