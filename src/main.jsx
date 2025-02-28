import React from "react";
import ReactDOM from "react-dom/client"; // React 18 way
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store"; // Import store
import App from "./App"; // Import App component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
