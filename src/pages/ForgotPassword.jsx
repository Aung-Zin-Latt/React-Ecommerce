import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Reset Your Password</h3>
                        <p className="text-center mt-2 mb-3">
                            We will send you an email to reset your password
                        </p>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Enter your email" 
                                />
                            </div>
                            
                            <div className="mt-0">
                                <div className="d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <button type="submit" className="button border-0">Submit</button>
                                    <Link to="/login" className="forgot-pw-font-cancel">Cancel</Link>
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

export default ForgotPassword