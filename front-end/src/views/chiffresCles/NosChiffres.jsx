import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBView,
    MDBContainer,
    MDBCardBody,
    MDBCard,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem
} from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../assets/styles/NosChiffres.css';


const NosChiffres = () => {

    const [chiffre, setChiffre] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/chiffres-cles")
                if (response.status === 200) {
                    setChiffre(response.data.chiffresFound)
                }

            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    if (chiffre.length === 0) {
        return <p>Loading ...</p>
    } else {
        return (
            < MDBView  >
                <MDBContainer>
                    <MDBCardBody className=" pb-0">
                        <h4 className='display-6 text-center fontW mt-5 pt-md-3 pt-3'>NOS CHIFFRES CLÉS</h4>
                    </MDBCardBody>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={false} showIndicators={true} multiItem className="mb-5">
                        <MDBCarouselInner>
                            <MDBRow className="my-5 text-center">
                                < MDBCarouselItem itemId="1">
                                    <MDBRow>
                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "400px" }} className="bg-orange">
                                                <div className="rounded-top">
                                                    <h1
                                                        className="fontW display-1 option white-text pt-5 mb-0"
                                                    >
                                                        {chiffre[0].rapport}
                                                    </h1>
                                                </div>
                                                <MDBCardBody className="lh-base  h5 font-weight-light text-white px-5 ">
                                                    {chiffre[0].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "400px" }} className="bg-orangeClair">
                                                <div className=" rounded-top ">
                                                    <h2
                                                        className="fontW display-1 option white-text pt-5 mb-0"
                                                    >
                                                        {chiffre[1].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="lh-base  h5 font-weight-light px-5 text-white ">
                                                    {chiffre[1].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "400px" }} className="bg-yellow">
                                                <div className=" rounded-top">
                                                    <h2
                                                        className="fontW display-1 option white-text pt-5 mb-0"
                                                    >
                                                        {chiffre[2].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="lh-base  h5 font-weight-light px-5 text-white ">
                                                    {chiffre[2].detail}
                                                </MDBCardBody>
                                            </MDBCard>

                                        </MDBCol>
                                    </MDBRow>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBRow>
                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "400px" }} className="bgc-blueDarker">
                                                <div className="  rounded-top">
                                                    <h2
                                                        className="fontW display-1 option white-text pt-5 mb-0"
                                                    >
                                                        {chiffre[3].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="lh-base  h5 font-weight-light px-5 text-white ">
                                                    {chiffre[3].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "400px" }} className="bgc-blueDark">
                                                <div className=" rounded-top ">
                                                    <h2
                                                        className="fontW display-1 option white-text pt-5 mb-0"
                                                    >
                                                        {chiffre[4].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="lh-base  h5 font-weight-light px-5 text-white ">
                                                    {chiffre[4].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "400px" }} className="bg-cyan">
                                                <div className=" rounded-top">
                                                    <h2
                                                        className="fontW display-1 option white-text pt-5 mb-0"
                                                    >
                                                        {chiffre[5].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="lh-base  h5 font-weight-light px-5 text-white ">
                                                    {chiffre[5].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCarouselItem>
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </MDBView >


        );
    }

}
export default NosChiffres