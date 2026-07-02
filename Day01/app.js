import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

let heading = React.createElement("h1", {}, "This is heading 1");
let para = React.createElement("p", {}, "This is paragraph");
let div = React.createElement("div", {}, [heading, para]);

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(div);
