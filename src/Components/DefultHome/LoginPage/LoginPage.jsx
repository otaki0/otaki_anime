import React, { useEffect, useState } from 'react'
import DefultHome from '../DefultHome'
import SignBuild from '../SignBuild'
import './LoginPage.css'
import { Link } from 'react-router-dom'


const LoginPage = () => {

    const [isLoading, setIsLoading] = useState(true)
    let users = [{}]
    


    useEffect(() => {
        if (localStorage.getItem('users') === null){
            // localStorage.clear()
            localStorage.setItem('user', JSON.stringify(users))

        }

        setTimeout(() => {
            setIsLoading(false)
        }, 500)

    }, [])


    return (
        <>
            {isLoading ? (
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width:  "75%"}} ></div>
            </div>
            ): (
            <DefultHome >
                <SignBuild title="Log-in">
                    <form className=''>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn  w-100 btn-primary mt-4 mb-2">Submit</button>
                        <Link to="/signin" className='link-1 '>Or Create Account</Link>
                    </form>
                </SignBuild>
            </DefultHome>)}
        </>
    )
}

export default LoginPage
