import React, { useState } from "react";
import Home from "./Home";

export default function Lamp() {
  const [lamp, setLamp] = useState("lamp-item lamp-light open");
  const [isComp, setcomp] = useState("false");

  const toggleComp = () => {
    if (isComp === "false") {
      setcomp("true");
      setLamp("");
    } else {
      setcomp("false");

      setLamp("lamp-item lamp-light open");
    }
    console.log(isComp, lamp);
  };

  return (
      <div class="lamp js-turnoff-btn " onClick={toggleComp}>
        <div class="lamp-item lamp-top"></div>
        <div class="lamp-item lamp-middle"></div>
        <div class="lamp-item lamp-bottom"></div>
        <div>
          <div class={lamp}>
            <div className="martop">{isComp ? <Home /> : null}</div>
          </div>
        </div>
      </div>
  );
}
