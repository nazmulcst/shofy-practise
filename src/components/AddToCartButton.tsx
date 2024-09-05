"use client";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/shofySlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
interface Props {
  product: ProductType;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );
  const { cart } = useSelector((state: StateType) => state?.shopy);

  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    // @ts-ignore
    setExistingProduct(availableProduct);
  }, [product, cart]);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    toast.success(`${product?.title.substring(0, 15)} added successfully!`);
    dispatch(addToCart(product));
  };

  const handleAdd = () => {
    dispatch(increaseQuantity(product?.id));
    toast.success("Quantity increased successfully!");
  };

  const handleMinus = () => {
    if (existingProduct?.quantity! > 1) {
      dispatch(decreaseQuantity(product?.id));
      toast.success("Quantity decreased successfully!");
    }
  };

  return (
    <>
      {existingProduct ? (
        <div
          className={twMerge(
            "flex items-center justify-between h-10",
            className
          )}
        >
          <button
            onClick={handleMinus}
            disabled={existingProduct?.quantity! <= 1}
            className="h-full w-10 border rounded-full flex items-center justify-center bg-gray-200 text-lg hover:bg-transparent hover:border-sky-600 duration-200 disabled:bg-gray-200 disabled:hover:bg-none disabled:border-none disabled:text-gray-400"
          >
            <FiMinus />
          </button>
          <p className="text-lg font-semibold">{existingProduct?.quantity}</p>
          <button
            onClick={handleAdd}
            className="h-full w-10 border rounded-full flex items-center justify-center bg-gray-200 text-lg hover:bg-transparent hover:border-sky-600 duration-200"
          >
            <FiPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="w-full bg-transparent border border-skyColor text-black tracking-wide text-sm py-1.5 hover:bg-skyColor mt-2 rounded-full hover:text-white duration-300"
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
