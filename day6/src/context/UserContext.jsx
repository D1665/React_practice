import React, { createContext } from "react";

// Create the context
export const Datacontext = createContext();

// Context provider component
function UserContext({ children }) {
  const userdata = {
    username: "John Doe",
    age: 30,
    city: "New York"
  };

  return (
    <Datacontext.Provider value={userdata}>
      {children}
    </Datacontext.Provider>
  );
}

export default UserContext;
