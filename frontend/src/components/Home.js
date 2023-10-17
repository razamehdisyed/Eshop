import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faHeart, faSearchPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import MetaData from './layout/MetaData'

const Home = () => {
    return (

        <Fragment>
            <MetaData title = {'Buy Best Products Online'} />

            {/* <!--====== Section Intro ======--> */}
            <div className="section__intro u-s-m-b-46">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section__text-wrap">
                                <h1 className="section__heading u-c-secondary u-s-m-b-12">FEATURED PRODUCTS</h1>

                                <span className="section__span u-c-silver">FIND NEW FEATURED PRODUCTS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--====== End - Section Intro ======--> */}


            {/* <!--====== Section Content ======--> */}
            <div className="section__content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                            <div className="product-o product-o--hover-on u-h-100">
                                <div className="product-o__wrap">

                                    <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                        <img className="aspect__img" src="images/product/electronic/product19.jpg" alt="" /></a>
                                    <div className="product-o__action-wrap">
                                        <ul className="product-o__action-list">
                                            <li>

                                                <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></a></li>
                                            <li>

                                                <a href="" data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></a></li>
                                            <li>

                                                <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li>
                   
                                        </ul>
                                    </div>
                                </div>

                                <span className="product-o__category">

                                    <a href="shop-side-version-2.html">Electronics</a></span>

                                <span className="product-o__name">

                                    <a href="product-detail.html">Tablet 14inch Screen</a></span>
                                <div className="product-o__rating gl-rating-style"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>

                                    <span className="product-o__review">(23)</span></div>

                                <span className="product-o__price">$125.00

                                    <span className="product-o__discount">$160.00</span></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                            <div className="product-o product-o--hover-on u-h-100">
                                <div className="product-o__wrap">

                                    <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                        <img className="aspect__img" src="images/product/electronic/product20.jpg" alt="" /></a>
                                    <div className="product-o__action-wrap">
                                        <ul className="product-o__action-list">
                                            <li>

                                                <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon></a></li>
                                            <li>

                                                <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></a></li>
                                            <li>

                                                <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li>

                                        </ul>
                                    </div>
                                </div>

                                <span className="product-o__category">

                                    <a href="shop-side-version-2.html">Electronics</a></span>

                                <span className="product-o__name">

                                    <a href="product-detail.html">Tablet 18inch Screen</a></span>
                                <div className="product-o__rating gl-rating-style"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                                    <span className="product-o__review">(23)</span></div>

                                <span className="product-o__price">$125.00

                                    <span className="product-o__discount">$160.00</span></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home