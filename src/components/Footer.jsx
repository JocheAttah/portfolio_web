import React from "react";
import Header from "./Header";
import insta from '../assets/icons/icon-instagram.svg';
import facebook from '../assets/icons/icon-facebook.svg';
import twitter from '../assets/icons/icon-twitter.svg';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__content">
      <div className="footer__left">
        <div className="footer__address">
          PLOT 598, ZONE B <br/> APO RESSETLEMENT, ABUJA, <br/> FCT NG, 900104 
        </div>
        <div className="footer__phone">
        Phone: +234 806 693 8107
        </div>
      </div>
      <div className="footer__right">
          <div className="footer__nav">
              <Header footer/>
          </div>
          <div className="footer__links">
              <a href="https://www.instagram.com/j_attah_d/" className="footer__link"><img className="footer__icon" src={insta} alt=""/></a>
              <a href="https://twitter.com/AttahIO" className="footer__link"><img className="footer__icon" src={twitter} alt=""/></a>
              <a href="https://web.facebook.com/dattah02/" className="footer__link"><img className="footer__icon" src={facebook} alt=""/></a>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
