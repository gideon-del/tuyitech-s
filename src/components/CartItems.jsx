import React from "react";
import { Link } from "react-router-dom";

const CartItems = ({ name, price, amount, id, img }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-y md:gap-5 lg:gap-8 gap-4 flex-wrap">
      <img src={img} className="w-32" />
      <span className="uppercase font-semibold">{name}</span>
      <div className="font-semibold">
        ₦{Intl.NumberFormat("en-US").format(price)} *{" "}
        <span className="text-slate-600">{amount}</span>{" "}
      </div>
      <div className="flex gap-4">
        <Link
          className="p-4 rounded-lg bg-green-400 text-md text-neutral-900 font-bold"
          to={`/products/${id}`}
        >
          Edit
        </Link>
        <button className="p-4 rounded-lg bg-red-600 text-md text-neutral-900 font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItems;
