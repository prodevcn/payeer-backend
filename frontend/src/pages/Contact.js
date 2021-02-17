import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ContactMap from "../components/contact-maps/ContactMap";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | Contact</title>
        <meta
          name="description"
          content="Contact page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="CONTACT" />
        {/* contact page content */}
        <section className="conact__area pt--140">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact__title">
                  <img
                    src={process.env.PUBLIC_URL + "/images/about/contact.png"}
                    alt="conatct images"
                  />
                  <h2>Get ROYAL TRANSFERT where you need !</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip commodo consequat. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="google__map">
                  {/* contact map */}
                  <ContactMap latitude="47.444" longitude="-122.176" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 sm__mt--40 md__mt--40">
                <div className="dg__contact__wrapper">
                  <form className="contact-form">
                    <div className="single-contact-form">
                      <span>Full Name</span>
                      <input type="text" name="firstname" />
                    </div>
                    <div className="single-contact-form">
                      <span>Email</span>
                      <input type="email" name="email" />
                    </div>
                    <div className="single-contact-form">
                      <span>Subject</span>
                      <input type="text" name="subject" />
                    </div>
                    <div className="single-contact-form message">
                      <span>Message</span>
                      <textarea name="message" defaultValue={""} />
                    </div>
                    <div className="contact-btn">
                      <button type="submit">
                        Submit
                        <span className="ti-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutTwo>
    </Fragment>
  );
};

export default Contact;
