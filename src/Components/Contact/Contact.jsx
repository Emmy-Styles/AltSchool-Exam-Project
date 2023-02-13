import React, { Fragment } from "react";
import './Contact.css'

const Contact = () => {
  return (
    <Fragment>
      <section className="contact">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>

        <div className="ccontainer">
          <div className="row">
            <div className="column">
              <div className="contact-widget">

                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>Plot 234 Ajose Adeogun, VI, Lagos Nigeria</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <h5>Contact Us</h5>
                    <p>+2348130279740</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h5>Mail</h5>
                    <p>uleluemmanuel@gmail.com</p>
                  </div>
                </div>


              </div>
            </div>

                <div className="column">
                    <div className="contact-form">
                        <form action="#" className="form-class">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="Comment"></textarea>
                            <button type="submit" className="site-btn"> Send Message </button>
                        </form>
                    </div>
                </div>
          </div>

          <div className="row">
            <div className="map-column">
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.940149176879!2d3.4131896161496793!3d6.42807669848975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1676200705349!5m2!1sen!2sng" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
          </div>


        </div>

      </section>
    </Fragment>
  );
};

export default Contact;
