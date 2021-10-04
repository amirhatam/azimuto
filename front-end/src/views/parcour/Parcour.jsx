import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBView,
    MDBContainer,
    MDBBtn,
    MDBIcon,
    
} from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'


const Parcour = () => {

    const [parcour, setParcour] = useState([]);
    const [url, setUrl] = useState("");
    const [editingId, setEditingId] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/parcour")
                if (response.status === 200) {
                    setParcour(response.data.parcourFound)
                }
                (response.data.parcourFound).map(e => {
                    //   console.log(e);
                    return setEditingId(e._id)
                })

            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    const editUrl = async () => {
        try {
            const response = await axios.patch(`http://localhost:8080/parcour/${editingId}/updateParcour`, { url: url })
            setEditingId("")

            const responseData = await axios.get("http://localhost:8080/parcour")
            setParcour(responseData.data.parcourFound)
        } catch (err) {
            console.error(err);
        }
    }



    if (!localStorage.tokenAdmin) {
        return (
            <MDBView className="purple-slight ">
                <MDBContainer className="text-center mb-5" style={{ marginTop: "17vmax", height: "200px" }}>
                    <h1 className="h1 mb-0"><MDBIcon far icon="frown" /></h1>
                    <h3 className="h1-responsive font-weight-bold mb-5">
                        Page Not Found !
                    </h3>
                </MDBContainer>
            </MDBView>
        )
    } else {
        if (parcour.length === 0) {
            return <p>Loading ...</p>
        } else {
            return (
                <MDBView className="purple-slight">
                    <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                        <div className="text-center my-5 ">
                            <h2 className="h1-responsive font-weight-bold text-center  pr-5 mb-5">
                                <a href="/EP" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> Parcour
                            </h2>
                        </div>
                        <MDBRow >
                            <MDBCol md='12' className='mb-5 text-center '>

                                <div>
                                    <a target='_blank' href={parcour[0].url} >{parcour[0].url}</a>
                                </div>
                                <div>
                                    <input type="text" onChange={(event) => setUrl(event.target.value)} className="form-control my-5" name="name" placeholder="" />
                                </div>
                                <div>
                                    <MDBBtn color="cyan" rounded onClick={editUrl}>Modifier</MDBBtn>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            )
        }
    }
}

export default Parcour