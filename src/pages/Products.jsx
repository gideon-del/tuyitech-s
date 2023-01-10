import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      const allProduct = [];
      const res = await getDocs(collection(db, "products"));
      res.forEach((prod) => allProduct.push({ id: prod.id, ...prod.data() }));
      setProducts(allProduct);
      setIsLoading(false);
    };
    fetchAllProducts();
  }, []);

  let content;
  if (isLoading) {
    content = <Loader />;
  }
  if (!isLoading && products.length > 0) {
    content = (
      <main>
        <section className="products">
          {products.map((product, i) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <motion.div
                className="w-full md:shadow-md md:w-full mx-auto bg-[#111111]  flex flex-col gap-2 rounded-2xl overflow-hidden"
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transitionDelay: `${i * 0.5}`,
                  transitionDuration: `0.5`,
                }}
                whileHover={{
                  scale: 1.2,
                  transitionTimingFunction: "ease-in-out",
                  transition: {
                    stiffness: 200,
                  },
                }}
              >
                <img
                  src={product.img}
                  className="w-full max-h-96 rounded-b-xl"
                />
                <div className="p-4 flex flex-col justify-between text-xl font-bold gap-4 text-white">
                  <h2 className="text-base md:text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
                    {" "}
                    {product.name}
                  </h2>
                  <span className="text-red-500 ">
                    ₦{Intl.NumberFormat("en-US").format(product.price)}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      </main>
    );
  }
  return content;
};

export default Products;
