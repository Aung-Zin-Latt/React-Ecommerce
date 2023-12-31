import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Signup = () => {
  return (
    <>
      <Meta title="Signup" />
      <BreadCrumb title="Signup" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-md-12">
                <div className="auth-card">
                    <h3 className="text-center mb-3">Sign Up</h3>
                    <form action="" className="d-flex flex-column gap-15">
                        <CustomInput 
                            type="text" 
                            name="name" 
                            placeholder="Enter your name"
                        />
                        {/* <div>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                placeholder="Enter your name" 
                            />
                        </div> */}
                        <CustomInput 
                            type="email"  
                            name="email"  
                            placeholder="Enter your email address"
                        />
                        <CustomInput 
                            type="tel" 
                            name="mobile"  
                            placeholder="Enter your mobile number"
                        />
                        <CustomInput 
                            type="password"  
                            name="password"  
                            placeholder="Enter your password"
                        />
                        <Link className="forgot-pw-font" to="/login">Already have an account? Login</Link>
                        <div className="mt-0">
                            <div className="d-flex justify-content-center gap-15 align-items-center">
                                <button type="submit" className="button border-0">Sign Up</button>
                                {/* <Link to="/signup" className="button signup">SignUp</Link> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Signup