import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Wishlist = () => {
  return (
    <>
       <Meta title="Wishlist" />
       <BreadCrumb title="Wishlist" />
       <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="wishlist-card w-100 position-relative">
                        <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid" 
                        />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                        </div>
                        <div className="px-3 py-3">
                            <h5 className="title">Honor T1 8.0 GB, ROM Inch With Wi-Fi+5G Tablet</h5>
                            <h6 className="price">$ 100</h6>
                        </div>
                    </div>
                </div>

                
                <div className="col-md-3">
                    <div className="wishlist-card w-100 position-relative">
                        <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid" 
                        />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                        </div>
                        <div className="px-3 py-3">
                            <h5 className="title">Honor T1 8.0 GB, ROM Inch With Wi-Fi+5G Tablet</h5>
                            <h6 className="price">$ 100</h6>
                        </div>
                    </div>
                </div>

                
                <div className="col-md-3">
                    <div className="wishlist-card w-100 position-relative">
                        <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid" 
                        />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                        </div>
                        <div className="px-3 py-3">
                            <h5 className="title">Honor T1 8.0 GB, ROM Inch With Wi-Fi+5G Tablet</h5>
                            <h6 className="price">$ 100</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>

    </>
  )
}

export default Wishlist
