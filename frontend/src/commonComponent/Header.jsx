import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";
export default function Header() {
  const product = useSelector((store) => store.product.products);
  const productCategory = [...new Set(product.map((item) => item.category))];
  const [placeHolderValue, setPlaceHolderValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (placeHolderValue == productCategory.length - 1) {
        setPlaceHolderValue(0);
        return;
      }
      setPlaceHolderValue((prev) => prev + 1);
    }, 3000);
  }, [placeHolderValue]);
  return (
    <header className="w-full p-4 border-border border-b flex gap-4 items-center">
      <img
        src={logo}
        className="object-cover w-[100px] h-[50px]"
        alt="site_logo"
      />
      <input
        type="search"
        name="search"
        id="search"
        placeholder={`Search "${productCategory[placeHolderValue]}"`}
        className="border border-border rounded-2xl text-gray-800 p-2 grow"
      />
    </header>
  );
}
