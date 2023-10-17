import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import {faHouse, faPlay, faShirt, faTv} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar bg-light justify-content-center">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home</a>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Products</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faTv}></FontAwesomeIcon> Electronics</a></li>
                                        <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faShirt}></FontAwesomeIcon> Clothes</a></li>
                                        <li><hr className="dropdown-divider"></hr></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </nav>
        </Fragment>
    )
}

export default Navbar