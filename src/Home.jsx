import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsIndex } from "./ProductsIndex";

export function Home() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexPhotos");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsIndex products={products} />
    </div>
  );
}
