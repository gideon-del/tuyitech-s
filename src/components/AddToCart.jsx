import React from "react";

const AddToCart = ({ addToCart }) => {
  return (
    <button
      className="block lg:text-3xl md:text-xl bg-orange-600  shadow-orange-700 text-white py-2 px-4 flex-1 mx-auto  rounded-md shadow-md font-semibold italic text-lg"
      onClick={addToCart}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
