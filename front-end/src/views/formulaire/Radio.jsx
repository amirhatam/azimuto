import React, { useState} from 'react';
import { MDBFormInline, MDBInput } from 'mdbreact';

function Radio(props) {
    const [radio, setRadio] = useState([]);
    // const user = "60e46055cb0e2536f45ab107"

    return (

        <MDBFormInline>

            <MDBInput
                onClick={() => setRadio(props.value)}
                checked={radio === props.value ? true : false}
                // label={props.value}
                name={props.id}
                type='radio'
                id={props.id}
                description={props.description}
                onChange={(e) => props.changeAnswerText({ 
                    user: localStorage.userId,
                    firstName: localStorage.firstName,
                    lastName: localStorage.lastName,
                    questionId: props.id,
                    question:props.description, 
                    valueNumber: props.value, 
                    email: localStorage.email
                })}
                containerClass='mx-1'
                className="mx-2 "
                style={{
                    width: "100%",
                    height: "20px"
                }}
            />
        </MDBFormInline>
    )
}

export default Radio

