import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="transparent"
      className={["text-center text-lg-start text-muted", classes.footer].join(
        " "
      )}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social media:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gavel" className="me-3" />
                LegalHelp.com
              </h6>
              <p>
                We provide professional legal assistance and expert guidance for
                all your legal needs. Whether it's personal injury, family law,
                or business advice, our team is here to help.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Legal Services</h6>
              <p>
                <a href="#!" className="text-reset">
                  Personal Injury
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Family Law
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Business Law
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Estate Planning
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Blog
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                USA, New York
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@legalhelp.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +92 335 2668377
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
      >
        © 2024 Copyright:{" "}
        <a className="text-reset" href="https://legalhelp.com/">
          LegalHelp.com
        </a>
      </div>
    </MDBFooter>
  );
}
