import React, { useContext } from "react";
import { Datacontext } from "../context/UserContext"; // Make sure the path is correct

function Header() {
  const userdata = useContext(Datacontext);

  return (
    <div className="header">
      <h1>Header</h1>
      <p>This is header — City: {userdata.city}</p>
    </div>
  );
}

export default Header;
