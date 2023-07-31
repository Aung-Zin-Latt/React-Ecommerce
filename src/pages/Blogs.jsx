import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  return (
    <div>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="filter-card mb-3">
                  <h3 className="filter-title">Find by Categories</h3>
                  <div>
                    <ul className="ps-0">
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="d-flex gap-10">
                  <div className="row">
                    <div className="col-md-6 my-3">
                      <BlogCard />
                    </div>
                    <div className="col-md-6 my-3">
                      <BlogCard />
                    </div>
                    <div className="col-md-6 my-3">
                      <BlogCard />
                    </div>
                    <div className="col-md-6 my-3">
                      <BlogCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
