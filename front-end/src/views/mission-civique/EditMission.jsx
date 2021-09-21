import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBView,
    MDBContainer,
    MDBBtn,

} from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'


const EditMission = () => {

    const [civique, setCivique] = useState([]);
    const [url, setUrl] = useState("");
    const [editingId, setEditingId] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/civique")
                if (response.status === 200) {
                    setCivique(response.data.civiqueFound)
                }
                (response.data.civiqueFound).map(e => {
                //   console.log(e);
                   return setEditingId(e._id)
                })

            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    console.log("editingId", editingId);

    const editUrl = async () => {
        try {
            const response = await axios.patch(`http://localhost:8080/civique/${editingId}/updateCivique`, { url: url })
            setEditingId("")

            const responseData = await axios.get("http://localhost:8080/civique")
            setCivique(responseData.data.civiqueFound)
        } catch (err) {
            console.error(err);
        }
    }

    if (civique.length === 0) {
        return <p>Loading ...</p>
    } else {
        return (
            <MDBView className="purple-slight">
                <MDBContainer className="mb-5" style={{ marginTop: "10vmax" }}>
                    <MDBRow >
                        <MDBCol md='12' className='mb-5 text-center '>
                            <MDBCol md='12' className='mb-4 text-center'>
                                <h4 className='display-6 font-weight-bold my-5 pt-md-3 pt-3'>
                                    MISSION DE SERVICE CIVIQUE </h4>
                            </MDBCol>
                            <div>
                                <h3>{civique[0].url}</h3>
                            </div>
                            <div>
                                <input type="text" onChange={(event) => setUrl(event.target.value)}  className="form-control my-5" name="name" placeholder="" />
                            </div>
                            <div>
                                <MDBBtn color="cyan" rounded onClick={editUrl}>Modifier</MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>
        );
    }
}
export default EditMission