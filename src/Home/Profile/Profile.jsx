import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/G7M7T1">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/g7m7t1/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.youtube.com/c/G7M7T1">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/G7M7T1">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, My name is <span className="highlighted-text">G7M7T1</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  steps={[
                    "I'm Web Developer",
                    2000,
                    "I'm Content Creator",
                    2000,
                    "I'm Graphic Designer",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me{""}</button>
            <a href="resume.pdf" download="Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
