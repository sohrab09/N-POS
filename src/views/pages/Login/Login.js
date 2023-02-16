import React from 'react'
import '../../../css/custom.css'
import '../../../css/responsive.css'
import '../../../css/style.css'
import '../../../css/typography.css'

import slide1 from '../../../images/1.png'
import logoWhite from '../../../images/logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <section className="sign-in-page">
            <div className="container bg-white mt-5 p-0">
                <div className="row no-gutters">
                    <div className="col-sm-6 align-self-center">
                        <div className="sign-in-from">
                            <h1 className="mb-0 dark-signin">Sign in</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <form className="mt-4">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <a href="/" className="float-right" style={{ float: 'right', }}>Forgot password?</a>
                                    <input type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="m-2 w-100 d-flex justify-content-between">
                                    <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                        <input type="checkbox" className="custom-control-input" />
                                        <label className="custom-control-label remember" for="customCheck1">Remember Me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary float-right">Sign in</button>
                                </div>
                                <div className="sign-info">
                                    <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}>Sign up</Link></span>
                                    <ul className="iq-social-media">
                                        <li><a href="/"><FontAwesomeIcon icon={faFacebook} className="ri-facebook-box-line" /></a></li>
                                        <li><a href="/"><FontAwesomeIcon icon={faTwitter} className="ri-twitter-line" /></a></li>
                                        <li><a href="/"><FontAwesomeIcon icon={faInstagram} className="i-instagram-line" /></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <div className="sign-in-detail text-white">
                            <a className="sign-in-logo mb-5" href="/"><img src={logoWhite} className="img-fluid" alt="logo" /></a>
                            <div className="slick-slider11" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">
                                <div className="item">
                                    <img src={slide1} className="img-fluid mb-4" alt="logo" />
                                    <h4 className="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login