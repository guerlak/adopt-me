import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement(
    "div",
    {},
    //Element type, id, child
    [
      React.createElement("h1", {}, name),
      React.createElement("h2", {}, animal),
      React.createElement("h2", {}, breed)
    ]
  );
};

const App = () => {
  return React.createElement("div", { id: "pets" }, [
    React.createElement("h1", {}, "Adopt-me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "golden retriever"
    }),
    React.createElement(Pet, {
      name: "Peter",
      animal: "dog",
      breed: "labrador"
    }),
    React.createElement(Pet, { name: "Michel", animal: "cat", breed: "mixed" })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
