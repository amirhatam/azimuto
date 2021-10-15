import React, { useState} from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBFormInline,
  MDBIcon
} from 'mdbreact';
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Login = (props) => {
  let history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validLogin = async () => {
    try {
      console.log("je suis validLogin")
      console.log("email", email)
      console.log("password", password)

      const response = await axios.post("http://localhost:8080/user/login", { email: email, password: password })
      console.log("Login User response", response)

      if (response.data.error) {

        alert("Email or password incorrect")
      } else {

        const token = response.data.token
        const email = response.data.validUser.email
        const firstName = response.data.validUser.firstName
        const lastName = response.data.validUser.lastName
        const userId = response.data.validUser._id
        console.log("token", token)
        // console.log("email :", email)

        localStorage.setItem("token", `${token}`)

        localStorage.setItem("firstName", `${firstName}`)
        localStorage.setItem("lastName", `${lastName}`)
        localStorage.setItem("userId", `${userId}`)
        localStorage.setItem("email", `${email}`)

        props.connectUser()

        console.log("localStorage :", localStorage.getItem("token"));

        history.push("/logged/formulaire")

      }
    } catch (error) {
      // alert("Email or password incorrect")
      console.error("error :", error)
    }
  }

  // useEffect(() => {

  // }, [])

  return (
    <MDBFormInline className="bgc-light">
      <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
        <MDBRow className="px-5">
          <MDBCol className="row my-5 px-5">
            <MDBCard className="offset-3 col-6">
              <MDBCardBody>
                <>
                  <p className="h4 text-center py-4">Se Connecter</p>
                  <div className="grey-text">

                    <MDBInput label="Votre email" icon="envelope" group type="email" validate error="wrong" success="right"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <MDBInput label="Votre mot de passe" icon="lock" group type="password" validate
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center py-4 mt-3">
                    <MDBBtn onClick={validLogin} outline color='amber' className="rounded-pill py-3 px-4">
                      <MDBIcon icon='user' className='mr-2 ' /> Se connecter
                    </MDBBtn>
                  </div>
                </>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFormInline >
  );
};

export default Login;