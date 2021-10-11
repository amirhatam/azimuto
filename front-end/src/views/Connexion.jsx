import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, MDBIcon, MDBContainer } from "mdbreact";
import React, { useEffect } from 'react';
import LogoSignup from "../assets/images/signup.png"
import LogoLogin from "../assets/images/login.png"
const ConnexionPage = () => {




  useEffect(() => {
   
  }, [])

  return (
    <MDBView className="bgc-light text-center">
      <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
          <h2 className="h1-responsive font-weight-bold my-5">
          </h2>
          <MDBRow className="d-flex justify-content-around">
            <MDBCol md="6" xl="5" className="mb-4 px-5">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src={LogoLogin}
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">

                <h4 className="font-weight-bold mb-3">Tu as déjà un compte ? Connecte-toi vite ici !</h4>

                <MDBBtn href="/connexion/login"  color='amber' className="rounded-pill mb-5 " >
                  <MDBIcon icon='user' className='mr-2 ' /> Me Connecter
                </MDBBtn>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md="6" xl="5" className="mb-4 px-5">
              <MDBView className="overlay rounded z-depth-2" waves >
                <img
                  src={LogoSignup}
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">

                <h4 className="font-weight-bold mb-3">C'est la première fois que tu viens ? Clique ici</h4>

                <MDBBtn  href="/connexion/signup"  color='amber' className="rounded-pill mb-5"  >
                  <MDBIcon icon='user' className='mr-2 ' /> Créer mon compte
                </MDBBtn>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          </MDBContainer>
    </MDBView>

  );
}

export default ConnexionPage;