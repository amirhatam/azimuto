import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBView,
    MDBMask,
    MDBContainer,
    MDBCardBody,
    MDBCard,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem
} from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'


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
            < MDBView className="purple-slight" >
                <MDBMask className='rgba-purple-slight ' />
                <MDBContainer>

                    <MDBCardBody className="mt-5 pb-0">
                        <h4 className='display-6 text-center font-weight-bold mt-5 pt-md-3 pt-3'>NOS CHIFFRES CLÉS</h4>
                    </MDBCardBody>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={false} showIndicators={true} multiItem>
                        <MDBCarouselInner>
                            <MDBRow className="my-5 text-center">

                                < MDBCarouselItem itemId="1">
                                    <MDBRow>
                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "450px" }} className="">
                                                <div className="aqua-gradient rounded-top">
                                                    <h2
                                                        className="font-weight-bold option white-text p-5 mb-0"
                                                    >
                                                        {chiffre[0].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                    {chiffre[0].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "450px" }} className="">
                                                <div className="peach-gradient rounded-top ">
                                                    <h2
                                                        className="font-weight-bold option white-text p-5 mb-0"
                                                    >
                                                        {chiffre[1].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                    {chiffre[1].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "450px" }} className="">
                                                <div className="purple-gradient rounded-top">
                                                    <h2
                                                        className="font-weight-bold option white-text p-5 mb-0"
                                                    >
                                                        {chiffre[2].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                    {chiffre[2].detail}
                                                </MDBCardBody>
                                            </MDBCard>

                                        </MDBCol>
                                    </MDBRow>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBRow>
                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "450px" }} className="">
                                                <div className="aqua-gradient rounded-top">
                                                    <h2
                                                        className="font-weight-bold option white-text p-5 mb-0"
                                                    >
                                                        {chiffre[3].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                    {chiffre[3].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "450px" }} className="">
                                                <div className="peach-gradient rounded-top ">
                                                    <h2
                                                        className="font-weight-bold option white-text p-5 mb-0"
                                                    >
                                                        {chiffre[4].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                    {chiffre[4].detail}
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                            <MDBCard style={{ height: "450px" }} className="">
                                                <div className="purple-gradient rounded-top">
                                                    <h2
                                                        className="font-weight-bold option white-text p-5 mb-0"
                                                    >
                                                        {chiffre[5].rapport}
                                                    </h2>
                                                </div>
                                                <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
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