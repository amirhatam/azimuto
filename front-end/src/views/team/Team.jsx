import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBView } from "mdbreact";
import axios from 'axios'
import { useState, useEffect } from "react";




const TeamPage = () => {

    const [users, setUsers] = useState([]);

    // useEffect(async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8080/teams")
    //         setUsers(response.data.teamFound)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/teams")

                if (response.status === 200) {
                    setUsers(response.data.teamFound)
                }
            } catch (error) {
                console.error(error)
            }
        })();
    }, [])


    console.log("response.data", users);

    return (
        <MDBView className="bgc-white px-5 pb-1 text-center">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5">
                    Notre Équipe
                </h2>
                <p className="col-6 h6 grey-text w-responsive mx-auto mb-5 ">
                    Azimuto se base sur la force du collectif. Notre association fonctionne en gouvernance partagée. Découvrez ici les personnalités qui la compose :
                </p>


                <MDBRow className="text-md-left">
                    {users.map((elem,index) => {
                        return <>
                            <MDBCol lg="3" md="12" className="mb-5 px-0">
                                <MDBView waves>
                                    <img
                                        src={`http://localhost:8080/uploads/${elem.image}`}
                                        className="mx-auto  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                        tag="img"
                                        alt="Sample avatar"
                                        key={index}
                                    />
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="3" md="12" className="mb-5">
                                <h3 className=" font-weight-bold mb-3 text-danger" key={index}>{elem.name} </h3>
                                <h5 className="font-weight-bold grey-text mb-3" key={index}>{elem.post}</h5>
                                <p className="text-justify" key={index}>{elem.description}</p>
                            </MDBCol>

                        </>
                    })
                    }
                </MDBRow>
            </MDBCardBody>
        </MDBView>
    );
}

export default TeamPage;