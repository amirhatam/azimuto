import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, MDBIcon } from "mdbreact";
import React, { useEffect } from 'react';

const ConnexionPage = () => {




  useEffect(() => {
   
  }, [])

  return (
    <MDBView className="purple-slight text-center">
      <div className="container my-5" >

        <section className="mb-5" style={{ marginTop: "15vmax" }}>

          <MDBMask />

          <h2 className="h1-responsive font-weight-bold my-5">
            Espace Jeune
          </h2>

          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">

                <h4 className="font-weight-bold mb-3">Tu as déjà un compte ? Connecte-toi vite ici !</h4>

                <MDBBtn href="/connexion/login" outline color='purple' className="rounded-pill mb-5 " >
                  <MDBIcon icon='user' className='mr-2 ' /> Me Connecter
                </MDBBtn>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">

                <h4 className="font-weight-bold mb-3">C'est la première fois que tu viens ? Clique ici</h4>

                <MDBBtn  href="/connexion/signup" outline color='purple' className="rounded-pill mb-5"  >
                  <MDBIcon icon='user' className='mr-2 ' /> Créer mon compte
                </MDBBtn>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    </MDBView>

  );
}

export default ConnexionPage;