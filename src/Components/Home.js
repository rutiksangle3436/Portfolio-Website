import React from "react";
import "../Styles/Home.css";
import Typist from "react-typist";
import Rutik from "../Assets/rutik.png";


export default function Home() {
  return (
    <div>
      <div class="flex items-center h-screen ">
        <img src={Rutik} class="border-4 border-fly rounded-full  w-80 h-80 mx-20" />
        <div class="text-center PM text-fly w-50 mx-20">
          <blockquote>
            <p class="text-7xl font-large ">
             Hello!<span class="waving-hand">👋</span> I am Rutik!
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
