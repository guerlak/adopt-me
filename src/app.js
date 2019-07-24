import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";

import SearchParams from "./SearchParams";
// import Details from "./Details";
import DetailsClass from "./DetailsClass";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("darkBlue");

  return (
    <ThemeContext.Provider value={themeHook}>
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
          <div id="modal"></div>
        </div>
      </React.StrictMode>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById("root"));
