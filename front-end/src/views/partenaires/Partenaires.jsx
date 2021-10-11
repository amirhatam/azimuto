import React from "react";
import { MDBRow, MDBCol, MDBView, MDBContainer, MDBBtn } from "mdbreact";
import axios from 'axios'
import { useState, useEffect } from "react";

const Partenaires = () => {

    const [partenaires, setPartenaires] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/partenaires")

                if (response.status === 200) {
                    setPartenaires(response.data.partenaires)
                }

            } catch (err) {
                console.error(err);
            }
        })();
    }, [])


    return (
        <MDBView className="bgc-light ">
            <MDBContainer>
                <MDBRow >
                    <MDBCol md='12' className='mb-4 text-center'>
                        <h4 className='display-6 font-weight-bold my-5 pt-md-3 pt-3'>
                            NOS PARTENAIRES </h4>

                    </MDBCol>
                </MDBRow>
                <MDBRow >
                    {partenaires.map((elem,index) => {
                        return <>
                          
                            <MDBCol lg="4" md="12" className=" mb-5 mx-0 px-0 align-self-center" style={{ textAlign: "-webkit-center" }}>
                                <div style={{ width: "60%" }} className="rounded-circle">
                                    <MDBBtn  href={`${elem.url}`}  target="_blank"  className="rounded-circle p-0">
                                        <img
                                            src={`http://localhost:8080/uploads/${elem.image}`}
                                            className="mx-0  mb-md-0 mb-4 rounded z-depth-1 img-fluid rounded-circle"
                                            tag="img"
                                            alt={`https://www.${elem.url}`}
                                            key={index}
                                        />
                                    </MDBBtn>
                                </div>
                            </MDBCol>
                        </>
                    })}
                </MDBRow>

            </MDBContainer>
        </MDBView>
    )
}

export default Partenaires