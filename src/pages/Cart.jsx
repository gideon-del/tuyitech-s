import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <main className="my-4">
      <section>
        <h1 className="font-semibold italic text-2xl md:text-3xl text-center mb-4">
          Shopping Cart
        </h1>
        <div className="mb-2">
          <div>
            {cart.items.length > 0 ? (
              cart.items.map((item) => (
                <CartItems
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                  key={item.id}
                  id={item.id}
                  img={item.img}
                />
              ))
            ) : (
              <Link to="/products">
                <p className="bg-blue-700 p-5 rounded-lg w-fit mx-auto font-bold italic text-white">
                  Add Product
                </p>
              </Link>
            )}
          </div>

          {cart.items.length > 0 && (
            <CartTotal totalAmount={cart.totalAmount} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
