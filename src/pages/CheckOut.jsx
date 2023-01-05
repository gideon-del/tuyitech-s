import React from "react";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const { register, handleSubmit, error, reset } = useForm();
  const allFields = ["name", "email", "phoneNumber", "address"];
  const submit = (data) => {
    reset();
  };
  return (
    <main>
      <section>
        <h1 className="text-2xl italic font-bold text-center">Place Order</h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit(submit)}
        >
          <div className=" flex flex-col ">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Eg Godwin Isaac"
              {...register("name", {
                required: true,
              })}
              className="border border-gray-700 md:w-96 w-80 py-2 rounded-md pl-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="isaacgodwin2@gmail.com"
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              className="border border-gray-700 md:w-96 w-80 py-2 rounded-md pl-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              type="text"
              {...register("address", {
                required: true,
              })}
              className="border border-gray-700 md:w-96 w-80 py-2 rounded-md pl-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="phone-number">Phone number:</label>
            <input
              id="phone-number"
              type="number"
              placeholder="08133322200"
              {...register("phoneNumber", {
                required: true,
                minLength: 10,
              })}
              className="border border-gray-700 md:w-96 w-80 py-2 rounded-md pl-2"
            />
          </div>
          <button
            className="p-5 bg-blue-800 text-white text-xl mt-5 rounded-md"
            type="submit"
          >
            Place order
          </button>
        </form>
      </section>
    </main>
  );
};

export default CheckOut;
