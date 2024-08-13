import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import KfcMenu from "./OutletPage.jsx"
import "./index.css";
// import { CartProvider } from "./context.jsx";
import {Provider} from "react-redux"
import store from "./app/rtkStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <CartProvider> */}
      <App />
    {/* </CartProvider> */}
    </Provider>
  </React.StrictMode>
);
