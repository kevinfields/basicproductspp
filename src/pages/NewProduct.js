import { useNavigate } from "react-router-dom";
import NewProductForm from "../components/NewProductForm";

const NewProduct = () => {
  const navigate = useNavigate();

  async function addProductHandler(productData) {
    await fetch(
      "https://products-97b75-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/allproducts");
  }

  return (
    <section>
      <h1 className="head">Add New Product</h1>
      <NewProductForm onAddProduct={addProductHandler} />
    </section>
  );
};

export default NewProduct;
