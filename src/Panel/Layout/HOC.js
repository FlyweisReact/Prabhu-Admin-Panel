/** @format */

import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section className="hoc-cont">
          <div className="left">
            <Sidebar hamb={hamb} setHamb={setHamb} />
          </div>
          <div className="right">
          <Navbar />
            <Wcomponenet />
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
