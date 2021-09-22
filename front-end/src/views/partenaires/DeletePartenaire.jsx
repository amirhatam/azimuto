import React from 'react'
import { MDBContainer, MDBView, MDBBtn } from 'mdbreact';
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
                <div className="text-center my-5">
                    <MDBBtn size="lg" color='cyan' rounded href="/partenaires" className="mb-5">Go back</MDBBtn>
                </div>

                <div >
                    <h2>Es que vous êtes sur de suprimmer la Partenaire ?</h2>
                    <MDBBtn color="cyan" rounded onClick={deletePartenaire}>Confirmer</MDBBtn>
                </div>
            </MDBContainer>
        </MDBView>
    );
}

export default DeletePartenaire