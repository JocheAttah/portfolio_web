import React from "react";
import emailjs from 'emailjs-com';


function Contact() {
    
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_bp1ega2', e.target, 'user_TN6tdpl9o9334QwD6lZLA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="contact__contents">
        <div className="contact__heading">Hit me up</div>
        <p className="contact__paragraph">
          Send me a mail to <span>attahdavidjoche@gmail.com</span> <br /> or use
          the form below
        </p>

        <form onSubmit={sendEmail} className="contact__inputs">
          <div className="contact__input">
            <label htmlFor="name" className="contact__label ">
              Name
            </label>
            <input type="text" className="contact__name" name="name" placeholder="Your Name"/>
          </div>
          <div className="contact__input">
            <label htmlFor="email" className="contact__label" >
              Email
            </label>
            <input type="email" className="contact__email" name="email" placeholder="Your Email"/>
          </div>
          <div className="contact__input">
            <label htmlFor="subject" className="contact__label" >
              Subject
            </label>
            <input type="text" className="contact__subject" name="subject" placeholder="Subject"/>
          </div>
          <div className="contact__input">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea className="contact__message" name="message" id="" cols="30" rows="10" placeholder="Hello ADJ, I've got a job for you!"></textarea>
          </div>
          <button className="btn btn__black">SEND </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
