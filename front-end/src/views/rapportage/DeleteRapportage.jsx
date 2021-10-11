import React from 'react'
import { MDBContainer, MDBView, MDBBtn, MDBIcon } from 'mdbreact';
import axios from 'axios'

const DeleteRapportage = (props) => {

    const deleteRapportage = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/rapportage/${props.deleteId}/deleteRapportage`)
            if(!response){
                console.error("response err:",response);
            }
            const responseData = await axios.get("http://localhost:8080/rapportage")
            props.setRapportage(responseData.data.rapportage)
            props.setViews("List")

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <MDBView className="purple-slight">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>

                <div className="text-center my-5 ">
                    <h2 className="h1-responsive font-weight-bold text-center  pr-5 mb-5">
                        <a href="/rapportage" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> NOS PARTENAIRES
                    </h2>
                </div>

                <div >
                    <h2>Es que vous êtes sur de suprimmer le Rapportage ?</h2>
                    <MDBBtn color="cyan" rounded onClick={deleteRapportage}>Confirmer</MDBBtn>
                </div>
            </MDBContainer>
        </MDBView>
    );
}

export default DeleteRapportage