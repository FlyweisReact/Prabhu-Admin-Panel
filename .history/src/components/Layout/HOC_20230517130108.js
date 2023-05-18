/** @format */

import React, { useState } from "react";
import Sidebar from "../sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section className="hoc-cont">
          <div className="left">
            <Sidebar hamb={hamb} setHamb={setHamb} />
          </div>
          <div>
            <Wcomponenet />
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
