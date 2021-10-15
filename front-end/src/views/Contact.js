import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBView, MDBContainer } from "mdbreact";



const ContactPage = () => {

  return (
    <MDBView className="bgc-white">

      <MDBContainer
        style={{ marginTop: "15vmax" }}
      >
        <h2 className="h1-responsive fontW text-center mb-5">
          Contact
        </h2>
        <MDBRow className="" >
          <MDBCol lg="5" className="px-5 lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <div className="form-header orange accent-1">
                  <h3 className="mt-2">
                    <MDBIcon icon="envelope" /> Nous contacter:
                  </h3>
                </div>

                <div className="md-form">
                  <MDBInput
                    icon="user"
                    label="Your name"
                    iconClass="grey-text"
                    type="text"
                    id="form-name"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="envelope"
                    label="Your email"
                    iconClass="grey-text"
                    type="text"
                    id="form-email"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="tag"
                    label="Subject"
                    iconClass="grey-text"
                    type="text"
                    id="form-subject"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="pencil-alt"
                    label="Icon Prefix"
                    iconClass="grey-text"
                    type="textarea"
                    id="form-text"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="amber">Envoyer</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7" className="mb-5">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7269958868796!2d2.442337815674558!3d48.86341607928799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5ac436d9db%3A0xb0180280565d90ee!2s60%20Rue%20Franklin%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1626118459356!5m2!1sfr!2sfr"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="amber" className="accent-1">
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p className="m-0">
                  60 Rue Franklin
                </p>
                <p className="m-0 mb-3 mb-md-0">
                  93100 Montreuil
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="amber" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p className="mb-0">+33 6 36 50 48 05</p>
                <p className="mb-md-0">Lun - Vend, 9H30 - 17H00 </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="amber" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p className="mb-md-0">asso.azimuto@gmail.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </MDBView>

  );
}

export default ContactPage;