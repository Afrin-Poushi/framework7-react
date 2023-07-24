import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/assets/css/typography.css";

import "../src/assets/css/main.css";
/** Framework7 styles */

import "../src/assets/css/framework7-bundle.min.css";
/** Framework7 icons */

import "../src/assets/css/framework7-icons.css";

// Import F7 Bundle
import Framework7 from "framework7/lite-bundle";
// Import F7-React Plugin
import Framework7React from "framework7-react";

// Init F7-React Plugin
Framework7.use(Framework7React);

// Import Main App component

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const rootElement = document.getElementById("app");
ReactDOM.createRoot(rootElement).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
