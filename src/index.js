import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(process.env.REACT_APP_API_KEY);
console.log(process.env.REACT_APP_API_KEY);

const root = ReactDOM.createRoot(document.getElementById("sample"));
root.render(<App />);
