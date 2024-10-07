import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const bio2 = this.props.data.bio2;
    const bio3 = this.props.data.bio3;
    const bio4 = this.props.data.bio4;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    // The resume is stored in the public folder, so we reference it like this:
    const resumeDownload = "images/resume.pdf"; // Path to the resume in the public folder
    const letter1Download = "images/rhoderick_powell.pdf"; // Path to the resume in the public folder
    const letter2Download = "images/graham_calder.pdf"; // Path to the resume in the public folder
    const profile = "images/profilepic.jpg"; 

    return (
      <section id="about">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <a className="smoothscroll" href="#resume">
                РЕЗЮМЕ
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                СВЯЗАТЬСЯ СО МНОЙ
              </a>
            </li>
          </ul>
        </nav>
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profile}
                alt="Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Обо Мне</h2>
              <p>{bio}</p>
              <p>{bio2}</p>
              <p>{bio3}</p>
              <p>{bio4}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Контакты</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button" download>
                      <i className="fa fa-download"></i> Скачать Резюме
                    </a>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={letter1Download} className="button" download>
                      <i className="fa fa-download"></i> Скачать сопроводительное письмо1
                    </a>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={letter2Download} className="button" download>
                      <i className="fa fa-download"></i> Скачать сопроводительное письмо2
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
