// console.log(React);

// First Program of reactJs
// const h1 = React.createElement("h1", {}, "Hello world!");
// let root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h1);

// const parentDiv = React.createElement(
//   "div",
//   { id: "parentDiv" },
//   React.createElement("div", { id: "childDiv" }, "I am child div"),
// );
// let root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parentDiv);

let head1 = React.createElement(
  "h1",
  { style: { color: "blue", backgroundColor: "gray" } },
  "I am heading",
);
let head2 = React.createElement(
  "h1",
  { style: { fontSize: "70px" } },
  "I am heading",
);
let head3 = React.createElement(
  "h1",
  { style: { color: "yellow" } },
  "I am heading",
);
let div = React.createElement("div", {}, [
  head1,
  head2,
  head3,
  React.createElement("p", { style: { color: "red" } }, "lorem14"),
]);

ReactDOM.createRoot(document.querySelector("#root")).render(div);
