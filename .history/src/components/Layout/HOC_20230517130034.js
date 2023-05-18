/** @format */

import React, { useState } from "react";
import Sidebar from "../sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section className="H">
          <div>
            <Sidebar hamb={hamb} setHamb={setHamb} />
          </div>
          <div>
            <div>
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
