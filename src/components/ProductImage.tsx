"use client";
import Image from "next/image";
import { ProductType } from "../../type";
import { useState } from "react";

const ProductImage = ({ product }: { product: ProductType }) => {
  const [currentImage, setCurrentImage] = useState(product?.images[0]);

  return (
    <div className="flex items-start gap-2">
      {/* small images */}
      <div className="flex flex-col">
        {product?.images?.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(item)}
            className={`w-28 h-28 border mb-2 rounded-md ${
              item === currentImage && "border-sky-600"
            }`}
          >
            <Image
              src={item}
              alt="product-image"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
      <Image
        src={currentImage}
        alt="product-image"
        width={500}
        height={500}
        className="w-full h-96 object-contain bg-[#f7f7f7]"
      />
      {/* main image */}
    </div>
  );
};

export default ProductImage;
