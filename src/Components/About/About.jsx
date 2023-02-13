import React, { Fragment } from "react";
import "./About.css";
import image from '../../Assets/IMG_3749.JPG'
const About = () => {
  return (
    <Fragment>
      <section className="about">
        <div className="roww">
          <div className="columnn">
            <img src={ image } alt="user" />
          </div>

          <div className="columnn">
            <div className="about-info">
              <div className="main-title">
                <h2>About GitXplore</h2>
              </div>
              <h3>
                GitXplore is a react web application that lets you explore your
                Github portfolio in a stylish and user-friendly way.
              </h3>
              <p>
                Simply enter your Github username on the home page and GitXplore
                will retrieve your data from the Github API.
              </p>
              <p>
                Your repositories will be displayed with eye-catching colors and
                designs, making it easy to navigate and find what you're looking
                for. By clicking on each repository, you'll be able to see
                specific information, including details about the
                repository and its contents. If you don't have a Github username,
                you can try the app out using the test case "Emmy-Styles".
              </p>
              <div className="personal-info">
                <div className="btn">
                  <a
                    href="https://github.com/Emmy-Styles/AltSchool-Exam-Project"
                    className="banner-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
