import React from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";

import SearchParams from "./SearchParams";
import Details from "./Details";
import DetailsClass from "./DetailsClass";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt-me</Link>
        </header>
        <Router>
          <SearchParams path={"/"} />
          {/* <Details path={"/details/:id"} /> */}
          {/* //param ID was sent to props */}
          <DetailsClass path={"/details/:id"} />
        </Router>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
