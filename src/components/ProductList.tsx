import Image from "next/image";
import { ProductType } from "../../type";
import Container from "./Container";
import Title from "./Title";
import { FaStar } from "react-icons/fa6";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import Button from "./ui/Button";
import AddToCartButton from "./AddToCartButton";
import ProductCard from "./ProductCard";

interface Props {
  productsData: {
    products: ProductType[];
  };
}

const ProductList = ({ productsData }: Props) => {
  const { products } = productsData;

  return (
    <Container className="py-10">
      <Title>Trending Products</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {products?.map((item: ProductType) => (
          <ProductCard key={item?.id} product={item} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
