import React, { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";

const Login = () => {
  const [inputEmail, setEmail] = useState("email");
  const [inputPassword, setPassword] = useState("password");
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    let user = {
      email: inputEmail,
      password: inputPassword
    };
    if (inputEmail === "guerlak@hotmail.com") {
      setUser(user);
    }
  }, [setUser, inputEmail, inputPassword]);

  return (
    <div>
      <h1>{user.email}</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="insert email"
          value={inputEmail}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputPassword}
          onChange={e => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Login;
