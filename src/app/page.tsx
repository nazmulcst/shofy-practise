import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "@/lib";

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  const products = await getData(endpoint);

  return (
    <main>
      <Banner />
      <ProductList productsData={products} />
    </main>
  );
}
