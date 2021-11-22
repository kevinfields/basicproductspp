import { useContext } from "react";
import Card from "../userinterface/Card";
import WatchlistContext from "../store/watchlist-context";

const Product = (props) => {
  const watchCtx = useContext(WatchlistContext);
  const itemIsWatched = watchCtx.itemIsWatched(props.id);

  const toggleWatchStatusHandler = () => {
    if (itemIsWatched) {
      watchCtx.removeWatch(props.id);
    } else {
      watchCtx.addWatch({
        id: props.id,
        title: props.title,
        location: props.location,
        price: props.price,
        quantity: props.quantity,
        description: props.description,
        image: props.image,
        altimage: props.altimage,
      });
    }
  };

  return (
    <div className="productlistitem">
      <Card>
        <section className="productcontainer">
          <div className="productitem">
            <img src={props.image} alt={props.title} className="image" />
            {props.altimage ? (
              <img
                src={props.altimage}
                alt={props.title}
                className="altimage"
              />
            ) : null}
          </div>
          <div className="productitem">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Price: ${props.price}</p>
            <p>Location: {props.location}</p>
            <p>Number in Stock: {props.quantity}</p>
          </div>
          <div className="productitem">
            <button className="watchbutton" onClick={toggleWatchStatusHandler}>
              {itemIsWatched ? "Stop Watching" : "Watch"}
            </button>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default Product;
