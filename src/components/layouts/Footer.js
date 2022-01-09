import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Layout.css";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start page-footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="footer-icons">
          <a
            href="https://www.facebook.com/M.S.Prajwal"
            className="mx-3 text-reset"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/2001MSP?t=HnPN_evLbJ0zEZVxFLhE_w&s=08"
            className="mx-3 text-reset"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://wa.me/8660503798" className="mx-3 text-reset">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://instagram.com/sanjith___kumar"
            className="mx-3 text-reset"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjith-kumar-b8335b191"
            className="mx-3 text-reset"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="http://github.com/sanjith-kumar-048"
            className="mx-3 text-reset"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-logo">
                {/* <img
                  src="https://www.transparentpng.com/thumb/globe/earth-world-evident-globe-png-transparent-picture--IStQ5J.png"
                  alt="earth, world, evident globe png transparent picture @transparentpng.com"
                />{" "} */}
                Climate Crew
              </h6>
              <p>Trying to deacrase the climate change</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
              <p>
                <a href="/climate_change" className="text-reset">
                  Climate Change
                </a>
              </p>
              <p>
                <a href="/carbon_footprint" className="text-reset">
                  Carbon Footprint
                </a>
              </p>
              <p>
                <a href="/products" className="text-reset">
                  Products
                </a>
              </p>
              <p>
                <a href="/faq" className="text-reset">
                  FAQ
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  href="http://github.com/sanjith-kumar-048"
                  className="text-reset"
                >
                  <FontAwesomeIcon icon={faGithub} className="me-2" /> Github
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/M.S.Prajwal"
                  className="text-reset"
                >
                  <FontAwesomeIcon icon={faFacebook} className="me-2" />{" "}
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/prajwal-m-s-36b8a4191"
                  className="text-reset"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="me-2" />{" "}
                  Linkedin
                </a>
              </p>
              <p>
                <a href="https://wa.me/7204645047" className="text-reset">
                  <FontAwesomeIcon icon={faWhatsapp} className="me-2" />{" "}
                  Whatsapp
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />{" "}
                msprajwal2001@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />{" "}
                sanjithkumar048@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" /> +91 86 6050
                3798
              </p>
              <p>
                <FontAwesomeIcon icon={faWhatsapp} className="me-3" />
                +91 72 0464 5047
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 copyright">
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="#">
          Climate Crew
        </a>
      </div>
    </footer>
  );
}
