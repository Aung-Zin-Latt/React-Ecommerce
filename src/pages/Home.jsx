import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
  return (
    <>
      <Meta title="Home" />
      <BreadCrumb title="Home" />
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner image"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap gap-15 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner image"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Laptops Max</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner image"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner image"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner image"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="services d-flex align-items-center justify-content-between">

              {services?.map((i, j) => {
                return (
                  <div key={j} className="d-flex align-items-center gap-15">
                    <img src={ i.image } alt="services image" />
                    <div>
                      <h6>{ i.title }</h6>
                      <p className="mb-0">{ i.tagline }</p>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">

              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera Image" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera Image" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>SmartTV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="Camera Image" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="Camera Image" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera Image" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera Image" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>SmartTV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="Camera Image" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="Camera Image" />
              </div>

            </div>
          </div>
        </div>
      </Container>

      {/* <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera Image" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera Image" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>SmartTV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera Image" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera Image" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera Image" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera Image" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>SmartTV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera Image" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera Image" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section> */}

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Famous Products</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="images/famous-1.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="images/famous-2.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inches SK Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="images/famous-3.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Smartphone</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="images/famous-4.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Home Speakers</h5>
                <h6 className="text-dark">Room Filling Sound</h6>
                <p className="text-dark">From $699 or $116.58/mo. for 12 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-heading">Famous Products</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/famous-1.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/famous-2.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness.</h6>
                  <p className="text-dark">27-inches SK Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/famous-3.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphone</h5>
                  <h6 className="text-dark">Smartphone 13 Pro.</h6>
                  <p className="text-dark">Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/famous-4.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room Filling Sound</h6>
                  <p className="text-dark">From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      {/* <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container">
          
        </div>
      </section> */}

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container">
          
        </div>
      </section> */}

      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div>
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      {/* <section className="marquee-wrapper py-5">
        <div className="container">
          
        </div>
      </section> */}

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <BlogCard />
          </div>
          <div className="col-md-3">
            <BlogCard />
          </div>
          <div className="col-md-3">
            <BlogCard />
          </div>
          <div className="col-md-3">
            <BlogCard />
          </div>
        </div>
      </Container>


      {/* <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container">
          
        </div>
      </section> */}
    </>
  )
}

export default Home
