import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import Loader from "../components/Loader";
import UpdateCart from "../components/UpdateCart";
import { db } from "../firebase/firebaseConfig";
import { addProduct } from "../store/cartSlice";
const Product = () => {
  const { productId } = useParams();
  //This state  is to check if item is in cart
  const [itemInCart, setItemInCart] = useState(false);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const items = useSelector((state) => state.cart.items);
  const checkItemAmount = useCallback(() => {
    const itemInCart = items.find((item) => item.id === productId);
    if (itemInCart) {
      setQuantity(itemInCart.amount);
      setItemInCart(true);
    }
  }, []);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addProduct({
        id: productId,
        img: product.img,
        name: product.name,
        price: product.price,
        amount: quantity,
      })
    );
    history.push("/cart");
  };
  const changeQuantity = (choice) => {
    if (choice === "increase") {
      setQuantity((prev) => prev + 1);
    }
    if (choice === "decrease") {
      setQuantity((prev) => {
        if (prev === 1) return prev;
        return prev - 1;
      });
    }
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchProduct = async () => {
      const res = await getDoc(doc(db, "products", `${productId}`));
      const prod = { id: res.id, ...res.data() };

      setProduct(prod);
      setIsLoading(false);
    };
    fetchProduct();
    checkItemAmount();
  }, [productId, checkItemAmount]);

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
              <button
                className="hover:text-black transition-all duration-300 font-normal"
                onClick={() => changeQuantity("increase")}
              >
                +
              </button>
              <span>{quantity}</span>
              <button
                className="hover:text-black transition-all duration-300"
                onClick={() => changeQuantity("decrease")}
              >
                -
              </button>
            </div>
            {itemInCart ? (
              <UpdateCart addToCart={addToCart} />
            ) : (
              <AddToCart addToCart={addToCart} />
            )}
          </div>
        </div>
      </main>
    );
  }
  return content;
};

export default Product;
