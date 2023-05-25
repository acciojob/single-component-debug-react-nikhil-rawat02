import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const htmlTag =<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

ReactDOM.render(htmlTag, document.getElementById("root"))