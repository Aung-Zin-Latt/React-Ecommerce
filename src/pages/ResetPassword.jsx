import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Reset Password</h3>
                        <p className="text-center mt-2 mb-3">
                            We will send you an email to reset your password
                        </p>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Password" 
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    name="confirm_password" 
                                    className="form-control" 
                                    placeholder="Comfirm Password" 
                                />
                            </div>
                            <div className="mt-0">
                                <div className="d-flex justify-content-center gap-15 align-items-center">
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

export default ResetPassword
