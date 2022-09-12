import React from 'react'
import './SignBuild.css'


const SignBuild = (props) => {
    return (
        <div className="container main">
                <div className="header-text">
                    <h1>{props.title}</h1>
                    <p>welcome to our page, please confirm {props.title}</p>
                </div>
                <div className="form-container">
                    {props.children}
                </div>
            </div>
    )
}

export default SignBuild
