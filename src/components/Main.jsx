import React from "react";
import { HashLink } from "react-router-hash-link";

function Main() {
  return (
    <div className="main">
      <div className="main__contents">
        <div className="main__first">Hi, my name is</div>
        <div className="main__name">Attah David Joche</div>
        <div className="main__name main__name--work">
          I build things for the web
        </div>
        <p className="main__paragraph">
          I'm a design-minded software engineer in Abuja, NGR who specializes in{" "}
          <br></br>
          building (and occasionally designing) exceptional high-quality{" "}
          <br></br>
          websites and applications.
        </p>
        <HashLink to="/#contact">
          <button className="btn">
            Get In Touch
          </button>
        </HashLink>
      </div>
    </div>
  );
}

export default Main;
