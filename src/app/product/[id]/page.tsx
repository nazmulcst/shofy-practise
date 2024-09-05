import Container from "@/components/Container";
import ProductImage from "@/components/ProductImage";
import { getData } from "@/lib";
import { ProductType } from "../../../../type";
import Title from "@/components/Title";
import AddToCartButton from "@/components/AddToCartButton";

interface Props {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product: ProductType = await getData(endpoint);

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProductImage product={product} />
      <div className="flex flex-col gap-2 max-w-sm">
        <div>
          <p className="text-sm capitalize text-lightText font-semibold">
            {product?.category}
          </p>
          <Title className="text-2xl">{product?.title}</Title>
        </div>
        <div>
          {product?.availabilityStatus && (
            <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-md">
              In Stock
            </span>
          )}
        </div>
        <p className="text-sm tracking-wide max-w-sm">{product?.description}</p>
        <AddToCartButton product={product} className="justify-start gap-5 " />
      </div>
    </Container>
  );
};

export default SingleProductPage;
