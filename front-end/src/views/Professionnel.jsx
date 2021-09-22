import { MDBContainer, MDBCol, MDBCardTitle, MDBBtn, MDBCard, MDBCardBody, MDBView, MDBRow } from 'mdbreact';


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
                                        <MDBCardTitle className="my-5">Nos chiffres clés</MDBCardTitle>
                                        <MDBBtn href="/chiffres-cles">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol className="col-6 my-5 text-center">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className="my-5">Mission de service civique</MDBCardTitle>
                                        <MDBBtn href="/mission-civique">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol className="col-6 my-5 text-center">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className="my-5">Nos partenaires</MDBCardTitle>
                                        <MDBBtn href="/partenaires">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol className="col-6 my-5 text-center">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className="my-5">Rapportage</MDBCardTitle>
                                        <MDBBtn href="/rapportage">Click</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol className="col-6 my-5 text-center">
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