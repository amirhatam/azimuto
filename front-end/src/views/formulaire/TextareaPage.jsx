import React from 'react';

const TextareaPage = (props) => {
    // const user = "60e46055cb0e2536f45ab107"

    return (
        <div className="form-group">
            <textarea
                className="form-control"
                id={props.id}
                rows="5"
                description={props.description}
                onChange={(e) => props.changeAnswerText({
                    user: localStorage.userId,
                    firstName: localStorage.firstName,
                    lastName: localStorage.lastName,
                    questionId: props.id,
                    question:props.description, 
                    valueText: e.target.value,
                    email: localStorage.email
                })}
                style={{ width: "100%" }}
            />
        </div>
    )
}

export default TextareaPage;