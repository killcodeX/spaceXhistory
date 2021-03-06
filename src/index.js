import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataProvider from "./context/context";
import Footer from './component/footer';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
      <Footer/>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
