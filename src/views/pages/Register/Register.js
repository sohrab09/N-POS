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

const Register = () => {
    return (
        <section class="sign-in-">
            <div class="container mt-5 p-0 bg-white">
                <div class="row no-gutters">
                    <div class="col-sm-6 align-self-center">
                        <div class="sign-in-from">
                            <h1 class="mb-0">Sign Up</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <form class="mt-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Your Full Name</label>
                                    <input type="email" class="form-control mb-0" id="exampleInputEmail1" placeholder="Your Full Name" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail2">Email address</label>
                                    <input type="email" class="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div class="d-inline-block w-100">
                                    <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                        <label class="custom-control-label" for="customCheck1">I accept <a href="/">Terms and Conditions</a></label>
                                    </div>
                                    <button type="submit" class="btn btn-primary float-right">Sign Up</button>
                                </div>
                                <div class="sign-info">
                                    <span class="dark-color d-inline-block line-height-2">Already Have Account ? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link></span>
                                    <ul class="iq-social-media">
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

export default Register