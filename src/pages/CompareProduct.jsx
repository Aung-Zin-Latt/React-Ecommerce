import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'

const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="compare-product-card position-relative">
                        <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid" 
                        />
                        <div className="product-card-image">
                            <img className="w-100" src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Honor T1 8.0 GB, ROM Inch With Wi-Fi+5G Tablet</h5>
                            <h6 className="price mb-3">$100</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand: </h5>
                                    <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type: </h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availablity: </h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color: </h5>
                                    <Color />
                                </div>
                                <div className="product-detail">
                                    <h5>Size: </h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="compare-product-card position-relative">
                        <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid" 
                        />
                        <div className="product-card-image">
                            <img className="w-100" src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Honor T1 8.0 GB, ROM Inch With Wi-Fi+5G Tablet</h5>
                            <h6 className="price mb-3">$ 200</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand: </h5>
                                    <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type: </h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availablity: </h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color: </h5>
                                    <Color />
                                </div>
                                <div className="product-detail">
                                    <h5>Size: </h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>
                                </div>
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

export default CompareProduct
