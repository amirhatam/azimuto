import React from "react";
import '../assets/styles/Footer.css';
import { useState, useEffect } from "react";
import axios from 'axios'

import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavbarBrand, MDBView } from "mdbreact";
import Logo from "../assets/images/Logo3.png"



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

    <MDBFooter color='' className=" text-white font-small  ">
      <MDBView className="bgc-blueDark">

        <MDBContainer fluid className="container text-center text-md-left pt-5">
          <MDBRow>
            <MDBCol className="pb-3" md="6">
              <MDBNavbarBrand className="loco-con">
                <img
                  src={Logo}
                  alt=""
                  className="rounded-circle z-depth-2-half footerLogo"
                />
              </MDBNavbarBrand>
              {/* <h5 className="title">Footer Content</h5> */}
              <p className="px-3 m-0">
                60 Rue Franklin
              </p>
              <p className="px-3 m-0 mb-3">
                93100 Montreuil
              </p>

              <a className="px-3" href="tel:+33 6 36 50 48 05" title="+33 6 36 50 48 05"  >+33 6 36 50 48 05</a>
              <br />
              <a className="px-3" href="mailto:asso.azimuto@gmail.com" title="asso.azimuto@gmail.com" >asso.azimuto@gmail.com</a>

            </MDBCol>
            <MDBCol md="6">
              <ul>
                <li className="list-unstyled  my-1">
                  <a className="" href="/">ACCUEIL</a>
                </li>
                <li className="list-unstyled my-1">
                  <a className="" href="/qui-sommes-nous">QUI SOMMES NOUS</a>
                </li>
                <li className="list-unstyled my-1">
                  <a className="" href="/nos-programmes">NOS PROGRAMMES</a>
                </li>
                <li className="list-unstyled my-1">
                  <a className="" href="/participer">PARTICIPER</a>
                </li>
                <li className="list-unstyled my-1">
                  <a className="" href="/Contact">CONTACT</a>
                </li>
                <a href={`http://localhost:8080/uploads/${rapportage.pdf}`} target="_blank" rel="noreferrer" className=" light-white-text">
                  <h6 className=" fontW">
                    {rapportage.description}
                  </h6>
                </a>


              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="bgc-blueDarker text-center py-3">
          <MDBContainer fluid >
            &copy;  Tous droits réservés : <a href="https://www.Azimuto.org"> Azimuto.org </a>
          </MDBContainer>

        </div>
      </MDBView>
    </MDBFooter >
  );
}

export default FooterPage;