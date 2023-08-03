import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStarts from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom'
import PinchZoomPan from "react-image-zoom-pan";
import Color from '../components/Color'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import Container from '../components/Container'

const ProductDetails = () => {

    const props = {
        width: 400, 
        height: 600, 
        zoomWidth: 600, 
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
    };
    const [orderedProduct, setOrderedProduct] = useState(true)
    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={"Product Name"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-md-6">
                <div className="main-product-image">
                    {/* <div>
                        <ReactImageZoom {...props} />
                    </div> */}
                    <div style={{ width: '500px', height: '500px' }}>
                        <PinchZoomPan>
                            <img alt='Test Image' src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' />
                        </PinchZoomPan>
                    </div>
                </div>
                <div className="other-product-images d-flex flex-wrap gap-15">
                    <div>
                        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="watch" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="main-product-details">
                    <div className="border-bottom">
                        <h3 className="title">Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                    </div>
                    <div className="border-bottom py-3">
                        <p className="price">$ 2000.00</p>
                        <div className="d-flex align-items-center gap-10">
                            <ReactStarts
                                count={5}
                                size={24}
                                value={3}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className="mb-0 t-review">( 2 Reviews )</p>
                        </div>
                        <a className="review-btn" href="#review">Write a Review</a>
                    </div>
                    <div className="py-3">
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Type :</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Brand :</h3>
                            <p className="product-data">Havells</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Category :</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Tags :</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Availability :</h3>
                            <p className="product-data">In Stock</p>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                            <h3 className="product-heading">Size :</h3>
                            <div className="d-flex flex-wrap gap-15">
                                <span className="badge border bg-white text-dark border-secondary">S</span>
                                <span className="badge border bg-white text-dark border-secondary">M</span>
                                <span className="badge border bg-white text-dark border-secondary">L</span>
                                <span className="badge border bg-white text-dark border-secondary">XL</span>
                            </div>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                            <h3 className="product-heading">Color :</h3>
                            <Color />
                        </div>
                        <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                            <h3 className="product-heading">Quantity :</h3>
                            <div className="">
                                <input 
                                    type="number" 
                                    name="" 
                                    id="" 
                                    min={1}
                                    max={10}
                                    style={{ width: "70px" }}
                                    className="form-control"
                                />
                            </div>
                            <div className="d-flex align-items-center gap-30 ms-5">
                                <button type="submit" className="button border-0">Add To Cart</button>
                                <button to="/signup" className="button signup">Buy It Now</button>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                            <div>
                                <a href=""><TbGitCompare className="fs-5 me-2" />Add to Compare</a>
                            </div>
                            <div>
                                <a href=""><AiOutlineHeart className="fs-5 me-2" />Add to Wishlist</a>
                            </div>
                        </div>
                        <div className="d-flex gap-10 flex-column my-3">
                            <h3 className="product-heading">Shipping & Returns :</h3>
                            <p className="product-data">
                                Free shipping and returns available on all orders! <br /> (" ")
                                We ship all US domestic orders within
                                <b>5-10 business days!</b>
                            </p>
                        </div>
                        <div className="d-flex gap-10 my-3">
                            <h3 className="product-heading">Product Link :</h3>
                            <button
                                onClick={() => {
                                copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg");
                                }}
                            >
                                Copy Product Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-md-12">
                <h4>Description</h4>
                <div className="bg-white p-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum nemo et, soluta aspernatur 
                        odit sapiente voluptatem officiis libero sequi illo rerum! Dolor, 
                        quia facilis. Vel fugit laboriosam quo odit.
                    </p>
                </div>
            </div>
        </div>
      </Container>

      <Container className="reviews-wrapper home-wrapper-2">
        <div className="row">
            <div className="col-md-12">
                <h3 id="review">Reviews</h3>
                <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h4 className="mb-2">Customer Reviews</h4>
                            <div className="d-flex align-items-center gap-10">
                                <ReactStarts
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className="mb-0">Based on 2 Reviews</p>
                            </div>
                        </div>
                        {
                            orderedProduct &&
                            <div>
                                <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                            </div>
                        }
                    </div>
                    
                    <div className="review-form py-4">
                        <h4 className="mb-2">Write a Review</h4>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                                <ReactStarts
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={true}
                                    activeColor="#ffd700"
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
                            <div className="d-flex justify-content-end">
                                <button className="button border-0">Submit Review</button>
                            </div>
                        </form>
                    </div>

                    <div className="reviews mt-4">
                        <div className="review">
                            <div className="d-flex gap-10 align-items-center">
                                <h6 className="mb-0">Navdeep</h6>
                                <ReactStarts
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={true}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Labore possimus quia delectus eveniet atque, suscipit 
                                laboriosam quasi corporis nam quibusdam beatae, velit 
                                voluptates placeat, ut quis deserunt dicta! Excepturi, 
                                ipsam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>


      <Container className="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-md-12">
                <h3 className="section-heading">Our Popular Products</h3>
            </div>
        </div>
        <div className="row">
            <ProductCard />
        </div>
      </Container>
    </>
  )
}

export default ProductDetails
