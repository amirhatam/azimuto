import React, { useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView, MDBIcon} from 'mdbreact';
import { useHistory } from "react-router-dom";
import axios from 'axios'

const LoginAdmin = (props) => {

  let history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validLoginAdmin = async () => {
    try {
      console.log("je suis validLoginAdmin")
      console.log("email", email)
      console.log("password", password)

      const response = await axios.post("http://localhost:8080/login/loginadmin", { email: email, password: password })

      console.log("Login User response", response)

      if (response.data.error) {

        // alert("Email or password incorrect")

      } else {
        const tokenAdmin = response.data.token
        // const email = response.data.validUser.email

        console.log("tokenAdmin", tokenAdmin)
        // console.log("email :", email)

        localStorage.setItem("tokenAdmin", `${tokenAdmin}`)

        props.connectUser()

        console.log("localStorage :", localStorage.getItem("tokenAdmin"));

        history.push("/EP")
        // history.push("/espace-professionnel")
      }
    } catch (error) {
      // alert("Email or password incorrect")
      console.error("error :", error)
    }
  }



  return (

    <MDBView className="bgc-light">
      <div className="container my-5 ">
        <section className="mb-5" style={{ marginTop: "15vmax" }}>
          <MDBContainer>
            <MDBRow  className=" px-5">
              <MDBCol className="row my-5 px-5">
                <MDBCard className="offset-3 col-6">
                  <MDBCardBody>
                      <p className="h4 text-center py-4">Login Admin</p>
                      <div className="grey-text">

                        <MDBInput
                          label="Votre email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <MDBInput
                          label="Votre mot de passe"
                          icon="lock"
                          group
                          type="password"
                          validate
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn onClick={validLoginAdmin} color='amber' className="mb-5 py-3 btn-rounded " >
                          <MDBIcon icon='user' className='mr-2 ' /> Login Admin
                        </MDBBtn>

                        {/* <MDBBtn to="/modification" color="amber" type="submit" onClick={validLoginAdmin}>
                          Login Admin
                        </MDBBtn> */}
                      </div>
                 
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

export default LoginAdmin;