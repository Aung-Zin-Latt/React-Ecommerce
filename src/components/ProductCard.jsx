import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import productcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
import wishlist from '../images/wishlist.svg'
import watch from '../images/watch.jpg'
import watch2 from '../images/watch-1.jpg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

const ProductCard = (props) => {
  const { grid } = props;
  const location = useLocation()
//   console.log(location)

  return (
    <>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-md-3"} `}>
            <Link to=":id" className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    {/* eslint-disable-next-line */}
                    {/* <Link> */}
                    <div>
                        <img src={wish} alt="wishlist" />
                    {/* </Link> */}
                    </div>
                </div>
                <div className="product-image">
                    <img src={watch} className="img-fluid" alt="product image" />
                    <img src={watch2} className="img-fluid" alt="product image" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 packs multi colored students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={` description ${grid === 12 ? "d-block" : "d-none"} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor expedita modi voluptatum architecto eos sunt voluptatibus distinctio vel deserunt! Deleniti sequi ipsam veritatis iure deserunt inventore, neque voluptatem tempore.</p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        {/* Put Link tag */}
                        <div>
                            <img src={productcompare} alt="compare" />
                        </div>
                        <div>
                            <img src={view} alt="view" />
                        </div>
                        <div>
                            <img src={addcart} alt="addcart" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>


        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-md-3"} `}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    {/* eslint-disable-next-line */}
                    {/* <Link> */}
                    <div>
                        <img src={wishlist} alt="wishlist" />
                    {/* </Link> */}
                    </div>
                </div>
                <div className="product-image">
                    <img src={watch} className="img-fluid" alt="product image" />
                    <img src={watch2} className="img-fluid" alt="product image" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 packs multi colored students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={` description ${grid === 12 ? "d-block" : "d-none"} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor expedita modi voluptatum architecto eos sunt voluptatibus distinctio vel deserunt! Deleniti sequi ipsam veritatis iure deserunt inventore, neque voluptatem tempore.</p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        {/* Put Link tag */}
                        <div>
                            <img src={productcompare} alt="compare" />
                        </div>
                        <div>
                            <img src={view} alt="view" />
                        </div>
                        <div>
                            <img src={addcart} alt="addcart" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ProductCard
