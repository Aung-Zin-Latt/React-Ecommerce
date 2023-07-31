import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15275.809289034481!2d96.11760122981933!3d16.828721193457344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194caf1b44735%3A0x699d28c8674522a3!2sKamayut%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1690267876430!5m2!1sen!2smm"
              style={{ width: "600", height: "450px" }}
              width="600" 
              height="450" 
              className="border-0 w-100"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col-md-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div className="gap-15">
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text" 
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        className="form-control"
                        placeholder="Email" 
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea 
                        className="w-100 form-control" 
                        name="" 
                        id="" 
                        cols="30"
                        placeholder="Comments" 
                        rows="4"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>

                </div>
                <div className="gap-15">
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">No: 288, Near Kamayu, Yangon</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+959 406880124">+959 406880124</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:aungzinlatt007@gmail.com">aungzinlatt007@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 10AM - 6PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
