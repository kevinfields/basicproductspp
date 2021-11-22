import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WatchlistContextProvider } from "./store/watchlist-context";

ReactDOM.render(
  <WatchlistContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WatchlistContextProvider>,
  document.getElementById("root")
);
