import React from "react";
import "../Styles/Home.css";
import Typist from "react-typist";
import Rutik from "../Assets/rutik.png";
import Header from "./Header";
import "../Styles/ZilapBlackStormBlack-6wYD.ttf";
import Footer1 from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="intro" class="flex items-center h-screen ">
        <img
          src={Rutik}
          class="border-4 border-fly rounded-full  w-80 h-80 mx-20"
          alt="Rutik"
        />
        <div class="text-center GS text-fly w-50 mx-20">
          <blockquote>
            <p class="text-7xl font-large ">
              <Typist>
                Hello!<span class="waving-hand">👋</span> I am Rutik!
              </Typist>
            </p>
          </blockquote>
        </div>
      </div>
      <div id="education" class="flex justify-center ">
        <h1>
          <span class="underline--magical">Education</span>
        </h1>
      </div>
      <div class="text-center mx-auto text-black w-50 mx-20">
        <blockquote>
          <p>
            • M.S. Computer Engineering | San Jose State University, CA | Jan 2022 - Present | Pursuing
          </p>
          <p>
            • B.E. Computer, S.P.P.U. | Dr. D Y Patil College of Engineering,
            Pune | June 2018 - May 2021 | 8.78 / 10
          </p>
          <p>
            • Diploma in Computer Engineering, MSBTE | Y.B. Patil Polytechnic,
            Pune | July 2015 - May 2018 | 75.5%.
          </p>
        </blockquote>
      </div>
      <Footer1 />
    </div>
  );
}
