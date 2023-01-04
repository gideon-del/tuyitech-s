import React from "react";

const UpdateCart = ({ addToCart }) => {
  return (
    <button
      className="block lg:text-2xl md:text-xl bg-white border border-gray-800  shadow-gray-700 text-gray-800 py-2 px-4 flex-1 mx-auto  rounded-md shadow-md font-semibold italic text-lg"
      onClick={addToCart}
    >
      Update Item
    </button>
  );
};

export default UpdateCart;
