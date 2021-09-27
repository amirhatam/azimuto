import React from 'react'
import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBContainer, Link, MDBCard } from "mdbreact";

function ListQuestions(props) {
    return (

        <MDBView className="purple-slight">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <h2 className="h1-responsive font-weight-bold my-5 text-center">
                    Liste des questions
                </h2>
                <MDBRow className="d-flex justify-content-center">
                    {props.questions.map((elem) => {
                        return <>
                            <MDBCol className="my-5" md='4' >
                                <MDBCard testimonial >
                                <h4 className='card-title mt-5 px-5' style={{ height: "10vmax" }}>{elem.description}</h4>
                                    <hr />
                                    <div className="text-center my-2">
                                        <MDBBtn size="sm" outline color='purple' className="btn-rounded btn-1" onClick={(e) => { props.setEditingId(elem._id); props.setViews("Edit") }}>Editer</MDBBtn >
                                        <MDBBtn size="sm" outline color='purple' className="btn-rounded btn-1" onClick={(e) => { props.setDeletId(elem._id); props.setViews("Delete") }}>Effacer</MDBBtn >
                                    </div>
                                </MDBCard>
                            </MDBCol>
                        </>

                    })}


                    {/* <MDBCardBody className="pb-0">
                        <MDBBtn color="purple" rounded>
                            <Link to="/modification" className="text-white nav-link active ">Modification Questions</Link>
                        </MDBBtn>
                    </MDBCardBody> */}
                </MDBRow>
            </MDBContainer>
        </MDBView>

    )
}

export default ListQuestions
