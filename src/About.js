import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="inner-about">
        <img src="https://i.ibb.co/qWbp7CQ/dp.jpg" alt="dp" />
      </div>
      <div className="inner-about2">
        <span className="brdr"></span>
        <h1>About me</h1>
        <p>
          Hi, I’m a student currently pursuing Engineering in Electronics &
          Communication Engineering, but my love for the advancing technologies
          has brought me in the arena of Computer Science.
        </p>
        <span className="para">
          I’m a determined Data Science enthusiast, Web Developer, specifically
          Front-end web development and a compact competitive coder who’s
          working his way up this ladder with each passing hour in parallel with
          the Electronics discipline I’m enrolled in.
        </span>
        <button>
          {" "}
          Read more <ArrowForwardIcon className="forward" />
        </button>
      </div>
    </div>
  );
};
export default About;
