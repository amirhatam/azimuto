import { MDBContainer,MDBIcon, MDBCol, MDBCardTitle, MDBBtn, MDBCard, MDBCardBody, MDBView, MDBRow } from 'mdbreact';




const Professionnel = () => {
   
    if (!localStorage.tokenAdmin) {
        return (
            <MDBView className="purple-slight ">
                <MDBContainer className="text-center mb-5" style={{ marginTop: "17vmax",height: "200px" }}>
                    <h1 className="h1 mb-0"><MDBIcon far icon="frown" /></h1>
                    <h3 className="h1-responsive font-weight-bold mb-5">
                    Page Not Found ! 
                    </h3>
                </MDBContainer>
            </MDBView>
        )
    } else {
        return (
            <MDBView className="purple-slight ">
                <div className="container my-5 ">
                    <section className="" style={{ marginTop: "15vmax" }}>
                        <MDBContainer>
                            <h2 className="h1-responsive font-weight-bold my-5 text-center">
                                L'espace Professionnel
                            </h2>
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
                                <MDBCol className="col-8 offset-2 my-5 text-center">
                                    <MDBCard>
                                        <MDBCardBody>
                                            <MDBCardTitle className="my-5">Étudiants</MDBCardTitle>
                                            <MDBBtn href="/etudiants">Click</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                </div>
            </MDBView>
        );
    }
};

export default Professionnel;