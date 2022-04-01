import React from "react";
import "../Styles/Home.css";
import Typist from "react-typist";
import Rutik from "../Assets/rutik.png";
import Header from "./Header";
import "../Styles/ZilapBlackStormBlack-6wYD.ttf";
import Footer1 from "./Footer";

export default function Home() {
  return (
    <div class="bg-black_pre text-gold_pre">
      <Header />
      <div id="intro" class="flex items-center h-screen ">
        <img
          src={Rutik}
          class="border-4 border-gold_pre rounded-full  w-80 h-80 mx-20"
          alt="Rutik"
        />
        <div class="text-center GS  w-50 mx-20">
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
      <br></br>
      <br></br>
      <div class="text-center mx-auto  w-50 mx-20">
        <blockquote>
          <p>
            • M.S. Computer Engineering | San Jose State University, CA | Jan
            2022 - Present | Pursuing
          </p>
          <hr></hr>

          <p>
            • B.E. Computer, S.P.P.U. | Dr. D Y Patil College of Engineering,
            Pune | July 2018 - June 2021 | 8.78 / 10
          </p>
          <hr></hr>

          <p>
            • Diploma in Computer Engineering, MSBTE | Y.B. Patil Polytechnic,
            Pune | July 2015 - May 2018 | 75.5%.
          </p>
        </blockquote>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="projects" class="flex justify-center ">
        <h1>
          <span class="underline--magical">Projects</span>
        </h1>
      </div>
      <br></br>
      <br></br>
      <div class="mx-auto text-center  w-50 mx-20">
        <blockquote>
          <h3>Celestial Learning</h3>
          <p>
            Description: MERN-based web application which allows authors to
            securely publish their courses without having to worry about data
            leaks.
          </p>
          <p>Technologies Used: MongoDB, Express.js, React.js, Node.js.</p>
          <hr></hr>
          <div >
            <h3>Traffic Rules Violation Detection System</h3>
            <p>
              Description: A system used to detect bike riders without helmets
              using ML and sending SMS with fine details.{" "}
            </p>
            <p>Technologies Used: TensorFlow, Python. </p>
            <p>
              This project was awarded 3rd prize out of 20 participants in
              Neuron Hackathon at DYPCOE Akurdi
            </p>
          </div>
          <hr></hr>

          <h3>Drone Routing and Planning</h3>
          <p>
            Description: Python based application for generating efficient
            routes for various routing purposes like survillence, delivery,
            agricultural uses, etc.
          </p>
          <p>Technologies Used: Python, numpy, pandas, matplotlib.</p>
        </blockquote>
      </div>

      <Footer1 />
    </div>
  );
}
