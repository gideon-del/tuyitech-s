import React, { useMemo } from "react";
import hp from "../assets/laptops/hp.jpg";
import hpElite from "../assets/laptops/hpElite.jpg";
import lenovo from "../assets/laptops/lenovo.jpg";
import macbook from "../assets/laptops/macbook.jpg";

const Cart = () => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      img: hp,
      name: "HP",
      price: 50000,
      quantity: 3,
    },
    {
      id: "p2",
      img: hpElite,
      name: "HP Elite",
      price: 20000,
      quantity: 2,
    },
    {
      id: "p3",
      img: lenovo,
      name: "Lenovo",
      price: 30000,
      quantity: 4,
    },
    {
      id: "p4",
      img: macbook,
      name: "Macbook",
      price: 70000,
      quantity: 5,
    },
  ];

  return (
    <main>
      <section>Carts</section>
    </main>
  );
};

export default Cart;
