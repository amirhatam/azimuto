import React from 'react'
import { MDBContainer, MDBView, MDBBtn,MDBIcon } from 'mdbreact';
import axios from 'axios'



const DeleteTeam = (props) => {

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/teams/${props.deleteId}/deleteteam`)
           if(!response){
               console.error("response err:",response);
           }
            const responseData = await axios.get("http://localhost:8080/teams")
            props.setUsers(responseData.data.teamFound)
            props.setViews("List")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MDBView className="bgc-light">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div className="text-center my-5 ">
                    <h2 className="h1-responsive fontW text-center  pr-5 mb-5">
                        <a href="/edit-team" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> Liste de bénévoles
                    </h2>
                </div>

                <div >
                    <h2 className="my-5">Es que vous êtes sur de suprimmer la bénévoles ?</h2>
                    <MDBBtn color="amber" rounded onClick={deleteUser}>Confirmer</MDBBtn>
                </div>
            </MDBContainer>
        </MDBView>
    )


}

export default DeleteTeam