import React from "react";
import { render } from "react-dom";

import SearchParams from "./SearchParams";

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

  return (
    <div>
      <SearchParams />
      {/* <Pet name="Luna" animal="dog" breed="golden retriever" />
      <Pet name="Peter" animal="dog" breed="golden retriever" />
      <Pet name="Doggy" animal="dog" breed="golden retriever" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
