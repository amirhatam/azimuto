import React from 'react'
import { MDBContainer, MDBView, MDBBtn, MDBRow, MDBCardBody, MDBCard, MDBCol, MDBIcon } from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditChiffreCles from './EditChiffreCles';


const ChiffresCles = (props) => {

    const [chiffre, setChiffre] = useState([]);
    const [views, setViews] = useState("List")
    const [editingId, setEditingId] = useState([]);
  


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/chiffres-cles")
                if (response.status === 200) {
                    setChiffre(response.data.chiffresFound)
                }
            } catch (error) {
                console.error(error)
            }
        })();
    }, []);

    // const editChiffre = async () => {
    //     try {
    //         const response = await axios.patch(`http://localhost:8080/chiffres-cles/${editingId}/updateChiffre`, { rapport: rapport, detail: detail })
    //         setEditingId("")
    //         const responseData = await axios.get("http://localhost:8080/chiffres-cles")
    //         setChiffre(responseData.data.chiffresFound)
    //         setViews("List")
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }


   if (views === "Edit") {
        return <EditChiffreCles editingId={editingId} setEditingId={setEditingId} setChiffre={setChiffre} setViews={setViews} />
    }else {

    }

    return (
        <MDBView className="purple-slight">

            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <h1 className="my-5 text-center font-weight-bold">Nos Chiffres Clés</h1>

                <MDBRow>
                    {chiffre.map(e => {
                        return <>
                            <MDBCol className="my-5" md='4' >
                                <MDBCard testimonial style={{ height: "20vmax" }}>
                                    <MDBCardBody >
                                        <h4 className='card-title '>{e.rapport}</h4>
                                        <hr />
                                        <p>
                                            <MDBIcon icon='quote-left' /> {e.detail} <MDBIcon icon='quote-right' />
                                        </p>
                                    </MDBCardBody>
                                    <div className="text-center my-5">
                                        <MDBBtn size="lg" outline color='purple' className="btn-rounded btn-1" onClick={(elem) => { setEditingId(e._id); setViews("Edit") }}>Editer</MDBBtn >
                                    </div>
                                </MDBCard>
                            </MDBCol>
                        </>
                    })

                    }
                </MDBRow>
            </MDBContainer>
        </MDBView >
    )
}
export default ChiffresCles