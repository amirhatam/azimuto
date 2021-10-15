import React from 'react'
import { MDBContainer, MDBView, MDBIcon } from 'mdbreact';
import { useState} from 'react'
import axios from 'axios'



const AddPartenaire = (props) => {
    const [logo, setLogo] = useState("");
    const [url, setUrl] = useState("");
    const [partenairesAdded, setPartenairesAdded] = useState(false);
    if(!partenairesAdded){
        console.error("partenairesAdded err:",partenairesAdded);
    }
    
    const send = async () => {
        try {
            const newPartenaire = new FormData()

            newPartenaire.append("url", url)
            newPartenaire.append("image", logo)

            const response = await axios.post("http://localhost:8080/partenaires", newPartenaire)
            const responseData = await axios.get("http://localhost:8080/partenaires")
            props.setPartenaires(responseData.data.partenaires)
            props.setViews("List")

            if (response.status === 200) {
                setPartenairesAdded(true)
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <MDBView className="bgc-light">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div className="row my-5">
                    {/* {props.userAdded
                        ? <h2>User a été ajouté correctement!</h2>
                        : <> */}
                    
                    <div className="text-center my-5 ">
                        <h2 className="h1-responsive fontW text-center  pr-5 mb-5">
                            <a href="/partenaires" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> NOS PARTENAIRES
                        </h2>
                    </div>

                    <h2>Ajouter une nouvelle personne</h2>

                    <div className="mb-3">
                        <label className="form-label">Site</label>
                        <input type="text" onChange={(event) => setUrl(event.target.value)} className="form-control" name="name" placeholder="Entrer url" />
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Logo</label>
                        <input type="file" onChange={(event) => setLogo(event.target.files[0])} className="form-control" name="image" />
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-primary" onClick={send}>Envoyer</button>
                    </div>
                    {/* </>
                    } */}
                </div>
            </MDBContainer>
        </MDBView>
    )

}

export default AddPartenaire