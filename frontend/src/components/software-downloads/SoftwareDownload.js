import React from "react";
import ReactWOW from "react-wow";

const SoftwareDownload = () => {
  return (
    <div className="dg__software__area section-padding--tb bg--white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="dg__software__inner">
              <h2>Download Software, Compatible For All Devices</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation. Ut enim ad
                minim veniam, quis nostrud exercitation.
              </p>
              <ul className="available__device">
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/4.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/5.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/6.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/7.png"}
                      alt="images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <ReactWOW duration="2s" animation="fadeInRight">
              <div className="phone__images">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/3.png"}
                  alt="phone images"
                />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDownload;
