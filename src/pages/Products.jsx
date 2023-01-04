import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, doc, getDocs, query } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import Loader from "../components/Loader";

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
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <div className="w-3/4 md:shadow-md md:w-full mx-auto">
                <img src={product.img} className="w-full max-h-96" />
                <div className="p-4 flex flex-col justify-between text-xl font-bold gap-4">
                  <h2> {product.name}</h2>
                  <span className="text-orange-700 ">
                    ₦{Intl.NumberFormat("en-US").format(product.price)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    );
  }
  return content;
};

export default Products;
