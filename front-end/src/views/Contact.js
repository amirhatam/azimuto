import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBView,
  MDBContainer,
} from "mdbreact";
import '../assets/styles/Contact.css';
import contactImg from "../assets/images/contact.png"


const ContactPage = () => {

  return (
    <MDBView className="bgc-white">

      <MDBContainer
        style={{ marginTop: "15vmax" }}
      >
        {/* <h2 className="h1-responsive fontW text-center mb-5">
          Contact
        </h2> */}
        <MDBRow>
          <MDBCol lg="6" className=" px-5 lg-0 mb-4">
            <MDBCol className="px-0">
              <img src={contactImg} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCard>
              <MDBCardBody className="my-3" >
                <div className="form-header bg-orange accent-1 mx-3 px-3 mb-4">
                  <h3 className="text-white">
                    <MDBIcon icon="envelope" /> Nous contacter :
                  </h3>
                </div>
                <form action="https://formsubmit.co/amirhatam136@gmail.com" method="POST" className="px-3">
                  <div className="my-3">
                    <input type="email" name="email" placeholder="Votre Email" required className="form-control col" />
                  </div>
                  <div className="my-3">
                    <input type="text" name="Nom" placeholder="Votre Nom" required className="form-control col" />
                  </div>
                  <div className="my-3">
                    <textarea rows="5" cols="33" type="text" name="message" placeholder="Commentaire" required className="form-control col" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn bg-orange text-white" >Envoyer</button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="6" md="4">
            <h4 className=" fontW mb-3 "> On se rencontre ?</h4>
            <div className="mb-3">
              <MDBIcon icon="map-marker-alt" className="col-1 px-0 text-orange fa-2x " />
              <span className="fontW h5"> ADRESSE</span>
              <p className="my-2">
                60 Rue Franklin
              </p>
              <p className="m-0 mb-3 mb-md-0">
                93100 Montreuil
              </p>
            </div>
            <div className="my-4">
              <MDBIcon far icon="envelope" className="col-1 px-0 text-orange fa-2x" />
              <span className="fontW h5 "> EMAIL</span>
              <div className="d-table">
                <a href="mailto:asso.azimuto@gmail.com" className="d-block textColor mb-md-0 my-2"> asso.azimuto@gmail.com</a>
              </div>
            </div>
            <div className="my-4">
              <MDBIcon icon="phone-alt" className="col-1 px-0 text-orange fa-2x" />
              <span className="fontW h5 "> TEL</span>
              <div className="d-table">
                <a href="tel:+33 6 36 50 48 05" className="d-block textColor mb-md-0 my-2">+33 6 36 50 48 05</a>
              </div>
            </div>
            <h4 className=" fontW mb-3 ">Pour suivre nos actions :</h4>

            <div className="my-4">
              <MDBIcon fab icon="facebook-f" className="col-1 px-0 text-orange fa-2x" />
              <span className="fontW h5 "> FACEBOOK</span>
              <div className="d-table">
                <a href="https://www.facebook.com/assoazimuto/" target="_blank" rel="noreferrer" className="fb-ic d-block textColor mb-md-0 my-2">@Assozimuto</a>
              </div>
            </div>
            <div className="my-4">
              <MDBIcon fab icon="instagram" className="col-1 px-0 text-orange fa-2x" />
              <span className="fontW h5 ">INSTAGRAM</span>
              <div className="d-table">
                <a href="https://www.instagram.com/assoazimuto/" target="_blank" rel="noreferrer" className="ins-ic d-block textColor mb-md-0 my-2">@asso.azimuto</a>
              </div>
            </div>
            <div className="my-3">
              <MDBIcon fab icon="linkedin" className="col-1 px-0 text-orange fa-2x" />
              <span className="fontW h5 ">LINKEDIN</span>
              <div className="d-table">
                <a href="https://www.linkedin.com/company/azimut-accompagnement/?viewAsMember=true" target="_blank" rel="noreferrer" className="li-ic d-block textColor mb-md-0 my-2">Azimuto</a>
              </div>
            </div>



          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBCol lg="12" className="mt-5 px-0">
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
      </MDBCol>
    </MDBView >

  );
}

export default ContactPage;