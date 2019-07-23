import React from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";

import SearchParams from "./SearchParams";
import Details from "./Details";

// import MyDropDown from "./myDrop/MyDropDown";
// const arrayVinhos = ["Casal Garcia", "Aveleda", "Torres"];

const App = () => {
  //   return React.createElement("div", { id: "pets" }, [
  //     React.createElement("h1", {}, "Adopt-me"),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "dog",
  //       breed: "golden retriever"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Peter",
  //       animal: "dog",
  //       breed: "labrador"
  //     }),
  //     React.createElement(Pet, { name: "Michel", animal: "cat", breed: "mixed" })
  //   ]);
  // };

  // const VinhoComponent = MyDropDown("Vinhos", "Casal Garcia", arrayVinhos)[1];

  // const [escolha, VinhoComponent] = MyDropDown(
  //   "Vinhos",
  //   "Casal Garcia",
  //   arrayVinhos
  // );

  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt-me</Link>
        </header>
        <Router>
          <SearchParams path={"/"} />
          <Details path={"/details/:id"} />
        </Router>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
