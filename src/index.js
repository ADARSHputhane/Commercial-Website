import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-8vjhg41kaiut4c1x.us.auth0.com
// yvh5SV3GbmNK3YtqB9xBVFzeWMhpdex5

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-8vjhg41kaiut4c1x.us.auth0.com"
    clientId="yvh5SV3GbmNK3YtqB9xBVFzeWMhpdex5"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
