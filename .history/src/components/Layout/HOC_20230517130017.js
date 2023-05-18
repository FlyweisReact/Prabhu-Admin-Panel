/** @format */

import React, { useState } from "react";
import Sidebar from "../sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section>
          <div>
            <Sidebar hamb={hamb} setHamb={setHamb} />
          </div>
          <div>
            <div className="my-6 text-white h-[87%] wcomp overflow-y-auto">
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
