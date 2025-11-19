import { useSelector } from "react-redux";
export default function Home() {
  const products = useSelector((store) => store.product.products);
  return <section>Home</section>;
}
