import { MDBContainer, MDBCardImage, MDBCol, MDBCardTitle, MDBBtn, MDBCard, MDBCardBody, MDBView, MDBCardText, Link, MDBRow } from 'mdbreact';


const Professionnel = () => {

    return (

        <MDBView className="purple-slight ">
            <div className="container my-5 ">
                <section className="" style={{ marginTop: "15vmax"}}>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol className="col-6 my-5 text-center" >
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className="my-5">Notre Équipe</MDBCardTitle>
                                        <MDBBtn href="/edit-team">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol className="col-6 my-5 text-center">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className="my-5">Nos chiffre clés</MDBCardTitle>
                                        <MDBBtn href="#">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol className="col-6 my-5 text-center">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className="my-5">Mission de service civique</MDBCardTitle>
                                        <MDBBtn href="#">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol className="col-6 my-5 text-center">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className="my-5">Nos partenaires</MDBCardTitle>
                                        <MDBBtn href="#">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol className="col-6 offset-3 my-5 text-center">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className="my-5">Formulaire des questions</MDBCardTitle>
                                        <MDBBtn href="/modification">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </div>
        </MDBView>
    );
};

export default Professionnel;