import React from "react";

function Main() {
  return (
    <div className="main" id="home">
      <div className="main__contents">
        <div className="main__first">Hi, my name is</div>
        <div className="main__name">Attah David Joche</div>
        <div className="main__name main__name--work">I build things for the web</div>
        <p className="main__paragraph">
          I'm a design-minded software engineer in Abuja, NGR who specializes in <br></br>
          building (and occasionally designing) exceptional high-quality <br></br>
          websites and applications.
        </p>
        <button className="btn">Get In Touch</button>
      </div>
    </div>
  );
}

export default Main;
