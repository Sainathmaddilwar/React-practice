import react, { Component } from "react";
import { useState, useEffect, createContext, useContext } from "react";
const userContext = createContext();
const Context = () => {
  const [user, setUser] = useState({ name: "sai" });
  return (
    <>
      <userContext.Provider value={user}>
        <h1>hello {user.name} from context </h1>
        <Component1 />
      </userContext.Provider>
    </>
  );
};
const Component1 = () => {
  return (
    <>
      <Component2 />
    </>
  );
};
const Component2 = () => {
  const user = useContext(userContext);
  return (
    <>
      <h1>hello {user.name} from Component2</h1>
    </>
  );
};
export default Context;
