import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import AddToCartButton from "./AddToCartButton";
import { ProductType } from "../../type";
import Link from "next/link";

interface Props {
  product: ProductType;
}

const ProductSideBar = ({ id }: { id: number }) => {
  return (
    <div className="absolute bottom-12 right-2 border border-borderColor flex flex-col text-2xl rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 bg-themeWhite">
      <button className="p-2 hover:bg-skyColor hover:text-white duration-300">
        <FiShoppingCart />
      </button>
      <div className="p-2 hover:bg-skyColor hover:text-white duration-300 border-y border-y-borderColor">
        <FiEye />
      </div>
      <button className="p-2 hover:bg-skyColor hover:text-white duration-300">
        <MdFavoriteBorder />
      </button>
    </div>
  );
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border border-borderColor hover:shadow-lg hover:shadow-black/30 duration-300 rounded-md group">
      <div className="overflow-hidden relative">
        <Link
          href={{
            pathname: `/product/${product?.id}`,
            query: { id: product?.id },
          }}
        >
          <Image
            src={product?.images[0]}
            alt="product-image"
            width={500}
            height={500}
            className="w-full h-64 object-contain group-hover:scale-110 duration-300"
          />
          {product?.rating && (
            <p className="absolute top-2 right-2 bg-lightOrange text-white text-xs font-medium flex products-center py-1 px-2 rounded-lg gap-1">
              {product?.rating} <FaStar />
            </p>
          )}
          <ProductSideBar id={product?.id} />
        </Link>
      </div>
      <div className="p-4 border-t border-t-borderColor flex flex-col h-40 gap-1 justify-between">
        <div>
          <p className="text-sm font-medium capitalize text-lightText">
            {product?.category}
          </p>
          <h2 className="font-semibold line-clamp-2">{product?.title}</h2>
          <p className="font-semibold">${product?.price}</p>
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
