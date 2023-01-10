import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSingleProduct } from "../store/cartSlice";

const CartItems = ({ name, price, amount, id, img }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteSingleProduct({ id }));
  };
  return (
    <div className="flex items-center justify-between px-6 py-3 border-y md:gap-5 lg:gap-8 gap-4 flex-wrap">
      <img
        src={img}
        className="w-32 lg:w-40 border border-white p-3 rounded-md"
      />
      <span className="uppercase font-semibold">{name}</span>
      <div className="font-semibold">
        ₦{Intl.NumberFormat("en-US").format(price)} *{" "}
        <span className="text-slate-600">{amount}</span>{" "}
      </div>
      <div className="flex gap-4">
        <Link
          className="p-4 rounded-lg  text-md text-white lg:text-2xl font-bold"
          to={`/products/${id}`}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </Link>
        <button
          className="p-4 rounded-lg  lg:text-2xl text-red-600 font-bold"
          onClick={deleteProduct}
        >
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItems;
