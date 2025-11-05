import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import store from "./redux/store.js";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// GitHub Pages 404 fix: Restore original path if redirected from 404.html
const storedPath = sessionStorage.getItem("github-404-redirect");
if (storedPath && storedPath !== window.location.pathname) {
  // Remove the stored path
  sessionStorage.removeItem("github-404-redirect");
  // Restore the original path using history.replaceState
  // This preserves the path for React Router without reloading
  window.history.replaceState(
    null,
    "",
    storedPath + window.location.search + window.location.hash
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter basename="/xktrading">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
