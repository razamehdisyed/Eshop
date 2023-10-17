import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faPhoneVolume,faAngleDown,faUserGear,faLockOpen,faLock,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope,faCircleUser} from '@fortawesome/free-regular-svg-icons'
import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
         {/* <!--====== Nav 1 ======--> */}
            <nav className="primary-nav primary-nav-wrapper--border">
                <div className="container">

                    {/* <!--====== Primary Nav ======--> */}
                    <div className="primary-nav">

                        {/* <!--====== Main Logo ======--> */}

                        <a className="main-logo" href="/">

                            <img src="/images/logo/logo-1.png" alt="" /></a>
                        {/* <!--====== End - Main Logo ======--> */}


                        {/* <!--====== Search Form ======--> */}
                        <form className="main-form">

                            <label for="main-search"></label>

                            <input className="input-text input-text--border-radius input-text--style-1" type="text" id="main-search" placeholder="Search" />

                            <button className="btn btn--icon main-search-button" type="submit"><FontAwesomeIcon icon={faSearch} /></button></form>
                        {/* <!--====== End - Search Form ======--> */}


                        {/* <!--====== Dropdown Main plugin ======--> */}
                        <div className="menu-init" id="navigation">

                            <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs" type="button"></button>

                            {/* <!--====== Menu ======--> */}
                            <div className="ah-lg-mode">

                                <span className="ah-close">✕ Close</span>

                                {/* <!--====== List ======--> */}
                                <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                                    <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">

                                        <a>
                                            {/* <i className="far faUserCircle"></i> */}
                                            <FontAwesomeIcon icon={faCircleUser} />

                                            </a>

                                        {/* <!--====== Dropdown ======--> */}

                                        <span className="js-menu-toggle"></span>
                                        <ul>
                                            <li>

                                                <a href="dashboard.html">
                                                    <FontAwesomeIcon icon={faCircleUser} />
                                                    <span> Account</span></a></li>
                                            <li>

                                                <a href="signup.html">
                                                    <FontAwesomeIcon icon={faUserPlus} />

                                                    <span> Signup</span></a></li>
                                            <li>

                                                <a href="signin.html">
                                                <FontAwesomeIcon icon={faLock} />

                                                    <span> Signin</span></a></li>
                                            <li>

                                                <a href="signup.html">
                                                <FontAwesomeIcon icon={faLockOpen} />

                                                    <span> Signout</span></a></li>
                                        </ul>
                                        {/* <!--====== End - Dropdown ======--> */}
                                    </li>
                                    <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Settings">

                                        <a href=''><FontAwesomeIcon icon={faUserGear} /></a>

                                        {/* <!--====== Dropdown ======--> */}

                                        <span className="js-menu-toggle"></span>
                                        <ul>
                                            <li className="has-dropdown has-dropdown--ul-right-100">

                                                <a>Language
                                                <FontAwesomeIcon icon={faAngleDown} /></a>

                                                {/* <!--====== Dropdown ======--> */}

                                                <span className="js-menu-toggle"></span>
                                                <ul>
                                                    <li>

                                                        <a className="u-c-brand">ENGLISH</a></li>
                                                    <li>

                                                        <a>ARABIC</a></li>
                                                    <li>

                                                        <a>FRANCAIS</a></li>
                                                    <li>

                                                        <a>ESPANOL</a></li>
                                                </ul>
                                                {/* <!--====== End - Dropdown ======--> */}
                                            </li>
                                            <li className="has-dropdown has-dropdown--ul-right-100">

                                                <a>Currency <FontAwesomeIcon icon={faAngleDown} /></a>

                                                {/* <!--====== Dropdown ======--> */}

                                                <span className="js-menu-toggle"></span>
                                                <ul>
                                                    <li>

                                                        <a className="u-c-brand">$ - US DOLLAR</a></li>
                                                    <li>

                                                        <a>£ - BRITISH POUND STERLING</a></li>
                                                    <li>

                                                        <a>€ - EURO</a></li>
                                                </ul>
                                                {/* <!--====== End - Dropdown ======--> */}
                                            </li>
                                        </ul>
                                        {/* <!--====== End - Dropdown ======--> */}
                                    </li>
                                    <li data-tooltip="tooltip" data-placement="left" title="Contact">

                                        <a href="tel:+0900901904"><FontAwesomeIcon icon={faPhoneVolume} /></a></li>
                                    <li data-tooltip="tooltip" data-placement="left" title="Mail">

                                        <a href="mailto:contact@domain.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                </ul>
                                {/* <!--====== End - List ======--> */}
                            </div>
                            {/* <!--====== End - Menu ======--> */}
                        </div>
                    </div>
                </div>
            </nav>

    </Fragment>
  )
}

export default Header