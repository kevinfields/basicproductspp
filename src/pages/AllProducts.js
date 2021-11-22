import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const AllProducts = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function loadProducts() {
    setLoading(true);
    await fetch(
      "https://products-97b75-default-rtdb.firebaseio.com/products.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];
        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };
          products.push(product);
        }
        setLoadedProducts(products);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadProducts();
    console.log("loop");
  }, []);

  return (
    <section>
      <h1 className="head">All Products</h1>
      {loading ? <p className="centered">Loading...</p> : null}
      {loadedProducts.length < 1 && !loading ? (
        <p className="centered">There are no products available.</p>
      ) : null}
      <ProductList products={loadedProducts} />
    </section>
  );
};

export default AllProducts;
