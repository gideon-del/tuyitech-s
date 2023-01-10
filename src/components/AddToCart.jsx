import React from "react";
import { motion } from "framer-motion";
const AddToCart = ({ addToCart }) => {
  return (
    <motion.button
      className="block lg:text-3xl md:text-xl bg-[#070A5A] w-full py-2 my-3   text-white  self-stretch flex-1 mx-auto  rounded-md shadow-md font-semibold italic text-lg"
      onClick={addToCart}
      whileHover={{
        scale: "0.9",
        transition: {
          duration: "0.5",
          type: "spring",
        },
      }}
    >
      Add to cart
    </motion.button>
  );
};

export default AddToCart;
