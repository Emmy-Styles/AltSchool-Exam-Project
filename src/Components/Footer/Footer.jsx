import React from "react";
import "./Footer.css";
import { BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs"

function Footer() {
  return (
    <div className="main-footer">
      <div className="conttainer">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <ui className="list-unstyled">
              <li><a href="twitter.com" target="_blank"><BsTwitter /></a></li>
              <li><a href="linkedin.com" target="_blank"><BsLinkedin /></a></li>
              <li><a href="facebook.com" target="_blank"><BsFacebook /></a></li>
              
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="roow">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} GIT REP | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
