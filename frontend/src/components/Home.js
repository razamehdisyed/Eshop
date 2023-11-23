import React, { Fragment, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faHeart, faSearchPlus, } from '@fortawesome/free-solid-svg-icons'
import MetaData from './layout/MetaData'

import { useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'

const Home = () => {

    const dispatch = useDispatch()

    const { loading, products, error, productsCount} = useSelector(state => state.products )
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
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

                       {products && products.map(product => (
                        
                        <div key= {product._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                        <div className="product-o product-o--hover-on u-h-100">
                            <div className="product-o__wrap">

                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                    <img className="aspect__img" src="images/product/electronic/product1.jpg" alt="" /></a>
                                <div className="product-o__action-wrap">
                                    <ul className="product-o__action-list">
                                        <li>

                                            <a href="" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></a></li>
                                        <li>

                                            <a href="" data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></a></li>
                                        <li>

                                            <a href="signin.html" data-modal="modal" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li>
               
                                    </ul>
                                </div>
                            </div>

                            <span className="product-o__category">

                                <a href="shop-side-version-2.html">{product.category}</a></span>

                            <span className="product-o__name">

                                <a href="product-detail.html">{product.name}</a></span>
                            {/* <div className="product-o__rating gl-rating-style" style={{width: `${(product.ratings / 5) * 100}%`}}> */}
                                <div className='ratings mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner' style={{width: `${(product.ratings / 5) * 100}%`}}></div>
                                    </div>
                                
                                <span id="no_of_reviews">({product.numofReviews} Reviews)</span></div>

                            <span className="product-o__price">${product.price}

                                </span>
                        </div>
                    </div>
                       ))}

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home