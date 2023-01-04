import React from "react";

const CartTotal = ({ totalAmount }) => {
  return (
    <div className="font-semibold">
      <h1 className="text-center  text-3xl mb-4">
        Total:{" "}
        <span className="text-green-900 font-bold">
          ₦{Intl.NumberFormat("en-US").format(totalAmount)}
        </span>
      </h1>
      <div className="flex mx-auto w-fit gap-4">
        <button className="p-5 bg-blue-800 rounded-md text-white">
          Place Order🤑
        </button>
        <button className="p-5 bg-red-600 rounded-md text-white">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
