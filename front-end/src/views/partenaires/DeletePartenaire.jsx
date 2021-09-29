import React from 'react'
import { MDBContainer, MDBView, MDBBtn,MDBIcon } from 'mdbreact';
import axios from 'axios'


const DeletePartenaire = (props) => {

    const deletePartenaire = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/partenaires/${props.deleteId}/deletePartenaire`)
            const responseData = await axios.get("http://localhost:8080/partenaires")
            props.setPartenaires(responseData.data.partenaires)
            props.setViews("List")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MDBView className="purple-slight">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
            <div className="text-center my-5 ">
                        <h2 className="h1-responsive font-weight-bold text-center  pr-5 mb-5">
                            <a href="/partenaires" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> NOS PARTENAIRES
                        </h2>
                    </div>

                <div >
                    <h2 className="my-5">Es que vous êtes sur de suprimmer la Partenaire ?</h2>
                    <MDBBtn color="cyan" rounded onClick={deletePartenaire}>Confirmer</MDBBtn>
                </div>
            </MDBContainer>
        </MDBView>
    );
}

export default DeletePartenaire