import React, { useContext } from "react";
import { Datacontext } from "../context/UserContext"; // make sure the path is correct

function Section() {
  const sectiondata = useContext(Datacontext);

  return (
    <section className="section">
      <h1>Section</h1>
      <p>This is a section for {sectiondata.username} from {sectiondata.city}</p>
    </section>
  );
}

export default Section;
