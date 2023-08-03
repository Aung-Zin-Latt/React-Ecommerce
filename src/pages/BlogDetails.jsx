import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Container from '../components/Container'
import watch from '../images/blog-1.jpg'

const BlogDetails = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-md-12">
              <div className="single-blog-card">
                  <Link to="/blogs" className="d-flex align-items-center gap-10">
                      <HiOutlineArrowLeft className="fs-4" /> Go Back to Blogs
                  </Link>
                  <h3 className="title">A Beautiful Sunday Morning</h3>
                  <img 
                      src={watch} 
                      alt="blog details" 
                      className="img-fluid w-100 my-4"
                  />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem provident placeat, voluptates expedita 
                      temporibus obcaecati nobis ex iure delectus ratione doloribus amet, quam pariatur quos ipsa recusandae 
                      aperiam alias vero.
                  </p>
              </div>
          </div>
          {/* <div className="col-md-9"></div> */}
        </div>
      </Container>
    </>
  )
}

export default BlogDetails
