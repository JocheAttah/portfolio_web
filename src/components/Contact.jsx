import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
import { useState } from "react";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 200,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Contact() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setOpen(true);

    emailjs
      .sendForm(
        "gmail",
        "template_bp1ega2",
        e.target,
        "user_TN6tdpl9o9334QwD6lZLA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    // setOpen(false);
  }

  return (
    <div className="contact" id="contact">
      {/* Modals */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>Email Sent!!!</center>
        </div>
      </Modal>

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
            <input
              type="text"
              className="contact__name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="contact__input">
            <label htmlFor="email" className="contact__label">
              Email
            </label>
            <input
              type="email"
              className="contact__email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="contact__input">
            <label htmlFor="subject" className="contact__label">
              Subject
            </label>
            <input
              type="text"
              className="contact__subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div className="contact__input">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              className="contact__message"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Hello ADJ, I've got a job for you!"
            ></textarea>
          </div>
          <button className="btn btn__black">SEND </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
