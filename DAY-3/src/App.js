import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
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

const selectedPageHandler= (selectedPage)=>{

  if(
    selectedPage>=1&&
    selectedPage<=products.length /10 &&
  selectedPage!==page
  )
setPage(selectedPage);
  }



  
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="product--signam" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      
      {products.length > 0 && (
        <div className="pagination">
          <span className={page>1?"pagination__disable":""} onClick={()=>selectedPageHandler(page-1)}>▶️</span>
          {
            [...Array(products.length /10)].map((_,i)=>{
              return <span  className={page===i+1 ?"pagination_selector":"bhai color change krle"} onClick={()=>selectedPageHandler(i+1)} key={i}>{i+1}</span>
            })

            //selectedpageHandler pr i+1  isliye kregnge ki jisse wo pagination ho ske
          }
          <span className={page<products.length/10 ? "pagination__disable":""} onClick={()=>selectedPageHandler(page+1)}>◀️</span>
          
        </div>
      )}
    </div>
  );
}

export default App;
