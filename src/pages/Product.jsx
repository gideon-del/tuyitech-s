import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { db } from "../firebase/firebaseConfig";
const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProduct = async () => {
      const res = await getDoc(doc(db, "products", `${productId}`));
      const prod = { id: res.id, ...res.data() };
      console.log(prod);

      setProduct({ id: res.id, ...res.data() });
      setIsLoading(false);
    };
    fetchProduct();
  }, [productId]);
  let content;
  if (isLoading) {
    content = <Loader />;
  }
  if (!isLoading && product) {
    content = (
      <main className="flex md:px-10 py-7 flex-col lg:flex-row gap-5 items-center">
        <img
          src={product.img}
          alt="hp"
          className="flex-1  w-[90%] md:w-auto  md:max-h-[80vh]"
        />
        <div className="flex-1 md:self-auto self-stretch flex flex-col gap-3 md:gap-8 md:half">
          <div className="pl-5 flex flex-col gap-6">
            <h1 className="text-3xl uppercase flex flex-col font-black text-zinc-800 gap-3">
              {product.name}

              <span className="text-orange-700 text-3xl font-bold">
                ₦{Intl.NumberFormat("en-US").format(product.price)}
              </span>
            </h1>
            <p className="max-w-md text-slate-800 font-bold ">
              {`${product.description}`}
            </p>
          </div>
          <div className="flex gap-7 lg:w-[90%] w-[90%] max-w-md mx-auto md:mx-0 ">
            <div className="flex flex-1  justify-between text-xl text-gray-700 border border-gray-700 items-center lg:gap-10  md:gap-6 bg-white w-fit p-4 shadow-lg rounded-lg ">
              <button className="hover:text-black transition-all duration-300 font-normal">
                +
              </button>
              <span>1</span>
              <button className="hover:text-black transition-all duration-300">
                -
              </button>
            </div>
            <button className="block lg:text-3xl md:text-xl bg-orange-600  shadow-orange-700 text-white py-2 px-4 flex-1 mx-auto  rounded-md shadow-md font-semibold italic text-lg">
              Add to cart
            </button>
          </div>
        </div>
      </main>
    );
  }
  return content;
};

export default Product;
