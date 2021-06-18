import React from "react";

const Experience = () => {
  return (
    <div className="exp">
      <div className="exp-img">
        <span></span>
        <h1>My Experience</h1>
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_1280.jpg"
          width="70%"
          height="70%"
          alt="coding"
        />
      </div>
      <div className="exp-side">
        <div className="exp-side-inner">
          <h2>2021 </h2>
          <div className="con">
            <h2>Junior Developer Intern</h2>
            <p>Working as an intern in the firm Rubodex.</p>
          </div>
        </div>
        <div className="exp-side-inner">
          <h2>2019 </h2>
          <div className="con">
            <h2>Freelance Developer</h2>
            <p>
              Working as a freelance developer since 2019, which helped me to
              gain experience.
            </p>
          </div>
        </div>
        <div className="exp-side-inner">
          <h2>2020</h2>
          <div className="con">
            <h2>Business Development Intern</h2>
            <p>Worked as an intern in the firm Corpversity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
