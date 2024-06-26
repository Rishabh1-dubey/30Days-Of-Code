import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    // console.log(data);
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => {
            return (
              <span className="product--signam">
               
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      <h1>hello world</h1>
    </div>
  );
}

export default App;
