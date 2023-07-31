import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Login</h3>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Enter your email" 
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Enter your password" 
                                />
                                <Link className="forgot-pw-font" to="/forgot-password">Forgot Password?</Link>
                            </div>
                            <div className="mt-0">
                                <div className="d-flex justify-content-center gap-15 align-items-center">
                                    <button type="submit" className="button border-0">Login</button>
                                    <Link to="/signup" className="button signup">SignUp</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
