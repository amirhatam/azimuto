import React, { useState, useEffect } from "react";
import {
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBFormInline,
  MDBView
} from 'mdbreact';


import { useHistory } from 'react-router-dom'
import { postSignup } from '../utils/network';
import axios from "axios";


const Signup = () => {

  let history = useHistory()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [levels, setLevel] = useState([]);
  const [parcour, setParcour] = useState([]);
  const [levelsSelect, setLevelSelect] = useState("")
  const [parcourSelect, setParcourSelect] = useState("");

  const [formErrors, setFormErrors] = useState([]);

  if (formErrors) {

  }

  const [userCreated, setUserCreated] = useState(false);


  const [emailErr, setEmailErr] = useState([]);
  const [passwordErr, setPasswordErr] = useState([]);
  const [passwordNotSame, setPasswordNotSame] = useState([]);
  const [firstNameErr, setFirstNameErr] = useState([]);
  const [lastNameErr, setLastNameErr] = useState([]);
  const [birthdayErr, setBirthdayErr] = useState([]);
  const [sexErr, setSexErr] = useState([]);
  const [levelsErr, setLevelsErr] = useState([]);
  const [parcourErr, setParcourErr] = useState([]);





  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
      history.push("/admin")
    }
  }, [])




  const validateForm = () => {

    const errors = []
    console.log("errors", errors)

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email.toLowerCase())) {
      errors.push("Email is not valid")
      setEmailErr("Email is not valid")
      if (regexEmail.test(email.toLowerCase())) {
        errors.push("")
        setEmailErr("")
      }
    }

    // const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const samePas = "Passwords are not the same"
    // const passContain = "Passwords must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte"
    const passContain = ["PASSWORDS MUST CONTAIN :", "- Minimum eight characters.", "- At least one uppercase letter.", "- One lowercase letter.", "- One number and one special characte."]

    if (password !== confirmPassword) {
      errors.push(samePas)
      setPasswordNotSame(samePas)

      if (password === confirmPassword) {
        errors.push("")
        setPasswordNotSame("")
      }
    } else {
      setPasswordNotSame("")
    }

    if (!regexPassword.test(password)) {
      errors.push(passContain)
      setPasswordErr(passContain)
      if (regexPassword.test(password)) {
        errors.push("")
        setPasswordErr("")
      }
    } else {
      setPasswordErr("")
    }


    const errFName = "Please enter your First Name"
    const errLName = "Please enter your Last Name"

    if (firstName === "") {
      errors.push(errFName)
      setFirstNameErr(errFName)
      if (!firstName === "") {
        errors.push("")
        setFirstNameErr("")
      }
    }else {
      setFirstNameErr("")
    }

    if (lastName === "") {
      errors.push(errLName)
      setLastNameErr(errLName)
      if (!lastName === "") {
        errors.push("")
        setLastNameErr("")
      }
    }else {
      setLastNameErr("")
    }



    if (birthday === "") {
      errors.push("Please enter your Birthday")
      setBirthdayErr("Please enter your Birthday")
      if (birthday) {
        errors.push("")
        setBirthdayErr("")
      }
    }else {
      setBirthdayErr("")
    }

    if (!sex) {
      errors.push("Please select your sex")
      setSexErr("Please select your sex")
      if (sex){
        errors.push("")
        setSexErr("")
      }
    } else {
      setSexErr("")
    }

    if (!levelsSelect) {
      errors.push("Please select your level study")
      setLevelsErr("Please select your level study")
      if (levelsSelect){
        errors.push("")
        setLevelsErr("")
      }
    } else {
      setLevelsErr("")
    }

    if (!parcourSelect) {
      errors.push("Please select your program")
      setParcourErr("Please select your program")
      if (parcourSelect){
        errors.push("")
        setParcourErr("")
      }
    } else {
      setParcourErr("")
    }

    return errors
  }


  const [radio, setRadio] = useState("");

  const program = async (body) => {
    try {
      const response = await axios.get("http://localhost:8080/program", body)


      setParcour(response.data)

    } catch (err) {
      console.log(err)
    }

  }


  const studies = async (body) => {
    try {
      const response = await axios.get("http://localhost:8080/levels", body)


      setLevel(response.data)

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    studies()
    program()

  }, [])


  // console.log("formErrors",formErrors);

  const signup = async () => {
    try {
      const validationErrors = validateForm()

      if (validationErrors.length === 0) {

        const result = await postSignup({
          firstName,
          lastName,
          birthday,
          email,
          sex,
          lvlstudy: levelsSelect,
          programs: parcourSelect,
          password,
          confirmPassword,
        })


        if (result) {
          setUserCreated(true)
        } else {
          alert("There was a problem")
        }
      } else {
        setFormErrors(validationErrors)
      }
    } catch (error) {
      alert("There was a problem")
    }
  }



  if (userCreated) {
    // return ("User created!")
    // return <Redirect to="https://scrolling-azimuto.netlify.app/" />
    return window.location.href = "https://scrolling-azimuto.netlify.app/"
  } else {

    return (
      <MDBView className="bgc-light ">
        <MDBContainer
          style={{ marginTop: "15vmax" }}
        >
          <MDBRow >
            <MDBCol className="row my-5">
              <MDBCard className="offset-3 col-6">
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">S'inscrire</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Ton prénom"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <p className="red-text pb-2">{firstNameErr}</p>

                      <MDBInput
                        label="Ton nom"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <p className="red-text pb-2">{lastNameErr}</p>
                      <MDBInput
                        label="Ton âge: ( year, month, day )"
                        icon="calendar-alt"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                      <p className="red-text pb-2">{birthdayErr}</p>
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
                      <p className="red-text pb-2">{emailErr}</p>


                      <MDBIcon style={{ fontSize: "1.8rem" }} icon="user" className="mr-3" />
                      <label icon="user" htmlFor="exampleDisabled" className="disabled">Tu es un(e)</label>
                      <MDBFormInline className="my-5">
                        <MDBInput
                          onClick={() => setRadio('Une fille')}
                          checked={radio === 'Une fille' ? true : false}
                          label='Une fille'
                          type='radio'
                          id='radio1'
                          containerClass='offset-1 mr-5'
                          style={{
                            width: "20px",
                            height: "20px"
                          }}
                          onChange={(e) => setSex("Women")}
                        />
                        <MDBInput
                          onClick={() => setRadio('Un garçon')}
                          checked={radio === 'Un garçon' ? true : false}
                          label='Un garçon'
                          type='radio'
                          id='radio1'
                          containerClass='mr-5'
                          style={{
                            width: "20px",
                            height: "20px"
                          }}
                          onChange={(e) => setSex("Men")}
                        />
                        <MDBInput
                          onClick={() => setRadio('Autre')}
                          checked={radio === 'Autre' ? true : false}
                          label='Autre'
                          type='radio'
                          id='radio1'
                          containerClass='mr-5'
                          style={{
                            width: "20px",
                            height: "20px"
                          }}
                          onChange={(e) => setSex("Autre")}
                        />
                        <p className="red-text pt-3">{sexErr}</p>
                      </MDBFormInline>

                      <div className="my-5">
                        <select className="browser-default custom-select" onChange={(e) => setLevelSelect(e.target.value)}>
                          <option>Choisis ton niveau scolaire</option>
                          {
                            levels.map((elem) => {
                              return (
                                <option value={elem._id} >{elem.name}</option>
                              )
                            })
                          }

                        </select>
                        <p className="red-text pt-4">{levelsErr}</p>
                      </div>

                      <div className="my-5">
                        <select className="browser-default custom-select" onChange={(e) => setParcourSelect(e.target.value)}>
                          <option>Choisis ton parcour</option>
                          {
                            parcour.map((elem) => {
                              return (
                                <option value={elem._id} >{elem.name}</option>
                              )
                            })
                          }
                        </select>
                        <p className="red-text pt-4">{parcourErr}</p>
                      </div>

                      <MDBInput
                        label="Votre mot de passe"
                        icon="lock"
                        group
                        type="password"
                        validate
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <MDBInput
                        label="Confirmer votre mot de passe"
                        icon="exclamation-triangle"
                        group
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {/* {passwordErr.map((e) => {
                        return <p className="red-text">{e}</p>
                      })
                      } */}

                      <p className="red-text">{passwordNotSame}</p>
                      <p className="red-text">{passwordErr[0]}</p>
                      <p className="red-text">{passwordErr[1]}</p>
                      <p className="red-text">{passwordErr[2]}</p>
                      <p className="red-text">{passwordErr[3]}</p>
                      <p className="red-text">{passwordErr[4]}</p>
                     

                    </div>


                    <div className="text-center py-4 mt-3">
                      {/* {userErrors.map(e => {
                        return <p className="red-text">{e}</p>
                      })} */}
                      <MDBBtn onClick={signup} color='amber' className="rounded-pill py-3 px-4" >
                        <MDBIcon icon='user' className='mr-2 ' />
                        Enregistrer
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    );
  }
}

export default Signup;