import React, { useEffect, useState } from 'react'
import DefultHome from '../DefultHome'
import SignBuild from '../SignBuild'
import { Link } from 'react-router-dom'
import './SigninPage.css'


const SigninPage = () => {

    
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({
        username: '',
        email:'',
        password:''
    })


    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false)
        }, 500)

    }, [])

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
        // console.log(user)
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        

    }



    return (
        <>
        {isLoading ?  (
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width:  "75%"}} />
                </div>
        )
        
        :(<DefultHome>
            <SignBuild title="sign-in">
                <form>
                <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input onChange={handleChange} type="text" className="form-control" id="username" name='username'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3 mb-2">Submit</button>
                    <Link to="/" className='link'> Have Account Already</Link>
                </form>
            </SignBuild>
        </DefultHome>)}
        </>
    )
}

export default SigninPage
