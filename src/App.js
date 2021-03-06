import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import ProductWatch from "./pages/ProductWatch";
import HomePage from "./pages/HomePage";
import Links from "./components/Links";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/productwatchlist" element={<ProductWatch />} />
      </Routes>
      <Links />
    </>
  );
}

export default App;
