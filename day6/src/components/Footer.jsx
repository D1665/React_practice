import React, { useContext } from "react";
import { Datacontext } from "../context/UserContext"; // adjust the path if needed

function Footer() {
  const data = useContext(Datacontext);

  return (
    <div className="footer">
      <h1>Footer</h1>
      <p>This is footer — Age: {data.age}</p>
    </div>
  );
}

export default Footer;
