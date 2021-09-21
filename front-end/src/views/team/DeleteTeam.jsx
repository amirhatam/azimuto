import React from 'react'
import { MDBContainer, MDBView, MDBBtn } from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'



const DeleteTeam = (props) => {

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/teams/${props.deleteId}/deleteteam`)
            const responseData = await axios.get("http://localhost:8080/teams")
            props.setUsers(responseData.data.teamFound)
            props.setViews("List")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MDBView className="purple-slight">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                    <div className="text-center my-5">
                        <MDBBtn size="lg" color='cyan' rounded href="/edit-team">Go back</MDBBtn>
                    </div>

                    <div >
                        <h2>Es que vous êtes sur de suprimmer la bénévoles ?</h2>
                        <MDBBtn color="cyan" rounded onClick={deleteUser}>Confirmer</MDBBtn>
                    </div>
            </MDBContainer>
        </MDBView>
    )


}

export default DeleteTeam