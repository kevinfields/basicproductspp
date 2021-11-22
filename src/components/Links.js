import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links">
      <nav>
        <p>
          <Link className="link" to="/">
            Home Page
          </Link>
        </p>
        <p>
          <Link to="/allproducts" className="link">
            All Products
          </Link>
        </p>
        <p>
          <Link to="/newproduct" className="link">
            Add a new product
          </Link>
        </p>
        <p>
          <Link to="/productwatchlist" className="link">
            Product Watchlist
          </Link>
        </p>
        <p>
          <Link to="/consolelogs" className="link">
            Console Logs page
          </Link>
        </p>
      </nav>
    </div>
  );
};

export default Links;
