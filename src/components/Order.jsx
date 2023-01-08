import React from "react";
import { useFlutterwave } from "flutterwave-react-v3";
import configFunction from "../lib/flutterConfig";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAllItem } from "../store/cartSlice";
const Order = ({ email, amount, name, phone_number }) => {
  const handleFlutterWave = useFlutterwave(
    configFunction(email, phone_number, name, amount)
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const onClick = () => {
    handleFlutterWave({
      callback: (res) => {
        console.log(res);
      },
      onClose: () => {
        dispatch(deleteAllItem());
        history.replace("/products");
      },
    });
  };
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 font-bold text-white text-2xl mx-auto flex justify-center items-center my-3 p-4 rounded-md italic"
    >
      Complete purchase with Flutterwave
    </button>
  );
};

export default Order;
