import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import watch from '../images/watch.jpg'
import Container from '../components/Container'

const Checkout = () => {
  return (
    <>
      <Meta title="Checkout" />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-md-7">
                <div className="checkout-left-data">
                    <h3 className="website-name">DNI Store</h3>
                    <nav style={{ "--bs-breadcrumb-divider:": ">" }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link className="text-dark total-price" to="/cart">Cart</Link>
                            </li>
                            &nbsp;
                            <li className="breadcrumb-item total-price active" aria-current="page">
                                Information
                            </li>
                            &nbsp;
                            <li className="breadcrumb-item total-price active">
                                Shipping
                            </li>
                            &nbsp;
                            <li className="breadcrumb-item total-price active" aria-current="page">
                                Payment
                            </li>
                        </ol>
                    </nav>
                    <h4 className="title total">Contact Information</h4>
                    <p className="user-details total">
                        DNI Store (dnistore@gmail.com)
                    </p>
                    <h4 className="mb-3">Shipping Address</h4>
                    <form 
                        className="d-flex flex-wrap gap-15 justify-content-between" 
                        action=""
                    >
                        <div className="w-100">
                            <select 
                                name="" 
                                id="" 
                                className="form-control form-select"
                            >
                                <option value="" selected disabled>
                                    Select Country
                                </option>
                            </select>
                        </div>
                        <div className="flex-grow-1">
                            <input
                                placeholder="First Name" 
                                type="text" 
                                className="form-control"
                            />
                        </div>
                        <div className="flex-grow-1">
                            <input
                                placeholder="Last Name" 
                                type="text" 
                                className="form-control"
                            />
                        </div>
                        <div className="w-100">
                            <input
                                placeholder="Address" 
                                type="text" 
                                className="form-control"
                            />
                        </div>
                        <div className="w-100">
                            <input
                                placeholder="Apartment" 
                                type="text" 
                                className="form-control"
                            />
                        </div>
                        <div className="flex-grow-1">
                            <input
                                placeholder="City" 
                                type="text" 
                                className="form-control"
                            />
                        </div>
                        <div className="flex-grow-1">
                            <select 
                                name="" 
                                id="" 
                                className="form-control form-select"
                            >
                                <option value="" selected disabled>
                                    Select State
                                </option>
                            </select>
                        </div>
                        <div className="flex-grow-1">
                            <input
                                placeholder="Zip Code" 
                                type="number" 
                                className="form-control"
                            />
                        </div>
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/cart" className="text-dark">
                                    <BiArrowBack />
                                    Return to Cart
                                </Link>
                                <Link to="/cart" className="button">
                                    Continue to Shipping
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-5">
                <div className="border-bottom py-4">
                    <div className="d-flex gap-10 mb-2 align-items-center">
                        <div className="w-75 d-flex gap-10">
                            <div className="w-25 position-relative">
                                <span style={{ top: "-10px", right: "2px" }} className="badge bg-secondary text-white rounded-circle py-2 position-absolute">
                                    1
                                </span>
                                <img className="img-fluid" src={watch} alt="product" />
                            </div>
                            <div>
                                <h5 className="total-price">Product Title</h5>
                                <p className="total-price">$ / dfhadfhakh</p>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="total">$ 100</h5>
                        </div>
                    </div>
                </div>
                <div className="border-bottom py-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="total">Subtotal</p>
                        <p className="total-price">$ 10000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 total">Shipping</p>
                        <p className="mb-0 total-price">$ 10000</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                    <h4 className="total">Total</h4>
                    <h5 className="total-price">$ 10000</h5>
                </div>
                <div></div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout
