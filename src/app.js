import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";

import SearchParams from "./SearchParams";
import Login from "./Login";
// import Details from "./Details";
import DetailsClass from "./DetailsClass";
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";

const App = () => {
  const themeHook = useState("darkBlue");

  const user = {
    email: "guerlak@hotmail.com",
    pass: "aloha"
  };

  const userHook = useState(user);

  return (
    <UserContext.Provider value={userHook}>
      <ThemeContext.Provider value={themeHook}>
        <React.StrictMode>
          <div>
            <header>
              <Link to="/">Adopt-me</Link>
            </header>
            <Router>
              <SearchParams path={"/"} />
              <Login path={"/login"} />
              {/* <Details path={"/details/:id"} /> */}
              {/* //param ID was sent to props */}
              <DetailsClass path={"/details/:id"} />
            </Router>
            <div id="modal"></div>
          </div>
        </React.StrictMode>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
render(<App />, document.getElementById("root"));
