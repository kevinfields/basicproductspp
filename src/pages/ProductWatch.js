import { useContext } from "react";
import WatchlistContext from "../store/watchlist-context";
import ProductList from "../components/ProductList";

const ProductWatch = () => {
  const watchContext = useContext(WatchlistContext);
  let content = <ProductList products={watchContext.watchlist} />;
  if (watchContext.totalWatched < 1) {
    content = (
      <p className="centered">You are not currently watching any items.</p>
    );
  }
  return (
    <section>
      <h1 className="head">Products to watch</h1>
      {content}
    </section>
  );
};

export default ProductWatch;
