import React from 'react'
import './DefultHome.css'

const DefultHome = (props) => {
    return (
        <>
        <header className='header-default'>
            <h1 className="logo"> otaki </h1>
            <div className="sign-container">
                {props.children}
            </div>
        </header>
        </>
    )
}

export default DefultHome
