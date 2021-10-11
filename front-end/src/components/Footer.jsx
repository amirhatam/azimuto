import React from "react";
import '../assets/styles/Footer.css';
import { useState, useEffect } from "react";
import axios from 'axios'

import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavbarBrand } from "mdbreact";
import Logo from "../assets/images/Logo2.png"



const FooterPage = () => {
  const [rapportage, setRapportage] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8080/rapportage")
        if (response.status === 200) {
          setRapportage(response.data.rapportage[0])
        }


      } catch (err) {
        console.error(err);
      }
    })();
  }, [])


  return (

    <MDBFooter color='blue lighten-4' className="text-white font-small pt-4 ">

      <MDBContainer fluid className="container text-center text-md-left">
        <MDBRow>
          <MDBCol className="pb-3" md="6">
            <MDBNavbarBrand className="loco-con">
              <img
                src={Logo}
                alt=""
                className="rounded-circle z-depth-2-half logo"
              />
            </MDBNavbarBrand>
            {/* <h5 className="title">Footer Content</h5> */}
            <p className="text-dark m-0">
              60 Rue Franklin
            </p>
            <p className="text-dark m-0 mb-3">
              93100 Montreuil
            </p>

            <a className="text-dark" href="mailto:asso.azimuto@gmail.com" title="asso.azimuto@gmail.com" >asso.azimuto@gmail.com</a>
            <br />
            <a className="text-dark" href="tel:+33 6 36 50 48 05" title="+33 6 36 50 48 05"  >+33 6 36 50 48 05</a>
    
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled  my-1">
                <a className="text-dark" href="/">ACCUEIL</a>
              </li>
              <li className="list-unstyled my-1">
                <a className="text-dark" href="/qui-sommes-nous">QUI SOMMES NOUS</a>
              </li>
              <li className="list-unstyled my-1">
                <a className="text-dark" href="/nos-programmes">NOS PROGRAMMES</a>
              </li>
              <li className="list-unstyled my-1">
                <a className="text-dark" href="/participer">PARTICIPER</a>
              </li>
              <li className="list-unstyled my-1">
                <a className="text-dark" href="/Contact">CONTACT</a>
              </li>
              <a href={`http://localhost:8080/uploads/${rapportage.pdf}`}  target="_blank" rel="noreferrer" className="text-dark light-white-text">
                <h6 className="text-dark font-weight-bold">
                  {rapportage.description}
                </h6>
              </a>


            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="primary-color  text-center py-3">
        <MDBContainer fluid >
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.Azimuto.org"> Azimuto.com </a>
        </MDBContainer>
      </div>
    </MDBFooter >
  );
}

export default FooterPage;