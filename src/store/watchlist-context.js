import { createContext } from "react";
import { useState } from "react";

const WatchlistContext = createContext({
  watchlist: [],
  totalWatched: 0,
  addWatch: (watchedProduct) => {},
  removeWatch: (productId) => {},
  itemIsWatched: (productId) => {},
});
export function WatchlistContextProvider(props) {
  const [userWatchlist, setUserWatchlist] = useState([]);
  const addWatchHandler = (watchedProduct) => {
    setUserWatchlist((prevUserWatchlist) => {
      return prevUserWatchlist.concat(watchedProduct);
    });
  };
  const removeWatchHandler = (productId) => {
    setUserWatchlist((prevUserWatchlist) => {
      return prevUserWatchlist.filter((product) => product.id !== productId);
    });
  };
  const itemIsWatchedHandler = (productId) => {
    return userWatchlist.some((product) => product.id === productId);
  };
  const context = {
    watchlist: userWatchlist,
    totalWatched: userWatchlist.length,
    addWatch: addWatchHandler,
    removeWatch: removeWatchHandler,
    itemIsWatched: itemIsWatchedHandler,
  };
  return (
    <WatchlistContext.Provider value={context}>
      {props.children}
    </WatchlistContext.Provider>
  );
}

export default WatchlistContext;
