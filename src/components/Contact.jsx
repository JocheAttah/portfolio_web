import React from "react";
// import sendIcon from "../assets/icons/send.svg"

function Contact() {
  return (
    <div className="contact">
      <div className="contact__contents">
        <div className="contact__heading">Hit me up</div>
        <p className="contact__paragraph">
          Send me a mail to <span>attahdavidjoche@gmail.com</span> <br /> or use
          the form below
        </p>

        <form action="" className="contact__inputs">
          <div className="contact__input">
            <label htmlFor="name" className="contact__label ">
              Name
            </label>
            <input type="text" className="contact__name" name="name"/>
          </div>
          <div className="contact__input">
            <label htmlFor="email" className="contact__label" >
              Email
            </label>
            <input type="email" className="contact__email" name="email" />
          </div>
          <div className="contact__input">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea className="contact__message" name="message" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="btn btn__black">SEND </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
