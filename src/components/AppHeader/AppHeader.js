import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const AppHeader = () => {
    return (
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <div className="iq-sidebar-logo">
                    <div className="top-logo">
                        <a href="index.html" className="logo">
                            <div className="iq-light-logo">
                                <img src="images/logo.gif" className="img-fluid" alt="" />
                            </div>
                            <div className="iq-dark-logo">
                                <img src="images/logo-dark.gif" className="img-fluid" alt="" />
                            </div>
                            <span>vito</span>
                        </a>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="navbar-left">
                        <ul id="topbar-data-icon" className="d-flex p-0 topbar-menu-icon">
                            <li className="nav-item">
                                <a href="/" className="nav-link font-weight-bold search-box-toggle"><FontAwesomeIcon icon={faUser} /></a>
                            </li>
                            <li>
                                <a href="/" className="nav-link"><FontAwesomeIcon icon={faUser} /></a>
                            </li>
                            <li>
                                <a href="/" className="nav-link"><FontAwesomeIcon icon={faUser} /></a>
                            </li>
                            <li>
                                <a href="/" className="nav-link"><FontAwesomeIcon icon={faUser} /></a>
                            </li>
                            <li>
                                <a href="/" className="nav-link"><FontAwesomeIcon icon={faUser} /></a>
                            </li>
                            <li>
                                <a href="/" className="nav-link"><FontAwesomeIcon icon={faUser} /></a>
                            </li>
                        </ul>
                        <div className="iq-search-bar d-none d-md-block">
                            <form action="" className="searchbox">
                                <input type="text" className="text search-input" placeholder="Type here to search..." />
                                <a className="search-link" href="/"><FontAwesomeIcon icon={faUser} /></a>
                                <div className="searchbox-datalink">
                                    <h6 className="pl-3 pt-3 pb-3">Pages</h6>
                                    <ul className="m-0 pl-3 pr-3 pb-3">
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="index.html"
                                                className="nav-link router-link-exact-active router-link-active pr-2">
                                                <FontAwesomeIcon icon={faUser} />Dashboard
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="dashboard-1.html"
                                                className="nav-link router-link-exact-active router-link-active pr-2">
                                                <FontAwesomeIcon icon={faUser} />Dashboard-1
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="chat.html" className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Chat
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="calendar.html" className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Calendar
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="profile.html" className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Profile
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="todo.html" className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Todo
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="app/index.html" className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Email
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="e-commerce-product-list.html"
                                                className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Product Listing
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="e-commerce-product-detail.html"
                                                className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Product Details
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="pages-faq.html"
                                                className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Faq
                                            </a>
                                        </li>
                                        <li className="iq-bg-primary-hover rounded">
                                            <a href="form-wizard.html"
                                                className="nav-link">
                                                <FontAwesomeIcon icon={faUser} />Form-wizard
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                        <i className="ri-menu-3-line"></i>
                    </button>
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                            <div className="main-circle"><FontAwesomeIcon icon={faUser} /></div>
                            <div className="hover-circle"><FontAwesomeIcon icon={faUser} /></div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav ml-auto navbar-list">
                            <li className="nav-item">
                                <a className="search-toggle iq-waves-effect language-title" href="/"><img
                                    src="images/small/flag-01.png" alt="img-flaf" className="img-fluid mr-1"
                                    style={{ height: '16px', width: '16px' }} /> English <i className="ri-arrow-down-s-line"></i></a>
                                <div className="iq-sub-dropdown">
                                    <a className="iq-sub-card" href="/"><img src="images/small/flag-02.png" alt="img-flaf"
                                        className="img-fluid mr-2" />French</a>
                                    <a className="iq-sub-card" href="/"><img src="images/small/flag-03.png" alt="img-flaf"
                                        className="img-fluid mr-2" />Spanish</a>
                                    <a className="iq-sub-card" href="/"><img src="images/small/flag-04.png" alt="img-flaf"
                                        className="img-fluid mr-2" />Italian</a>
                                    <a className="iq-sub-card" href="/"><img src="images/small/flag-05.png" alt="img-flaf"
                                        className="img-fluid mr-2" />German</a>
                                    <a className="iq-sub-card" href="/"><img src="images/small/flag-06.png" alt="img-flaf"
                                        className="img-fluid mr-2" />Japanese</a>

                                </div>
                            </li>

                            <li className="nav-item">
                                <a href="/" className="search-toggle iq-waves-effect">
                                    <div id="lottie-beil"></div>
                                    <span className="bg-danger dots"></span>
                                </a>
                                <div className="iq-sub-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white">All Notifications<small
                                                    className="badge  badge-light float-right pt-1">4</small></h5>
                                            </div>

                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/01.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Emma Watson Nik</h6>
                                                        <small className="float-right font-size-12">Just Now</small>
                                                        <p className="mb-0">95 MB</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/02.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">New customer is join</h6>
                                                        <small className="float-right font-size-12">5 days ago</small>
                                                        <p className="mb-0">Jond Nik</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/03.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Two customer is left</h6>
                                                        <small className="float-right font-size-12">2 days ago</small>
                                                        <p className="mb-0">Jond Nik</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/04.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                        <small className="float-right font-size-12">3 days ago</small>
                                                        <p className="mb-0">Jond Nik</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/" className="search-toggle iq-waves-effect">
                                    <div id="lottie-mail"></div>
                                    <span className="bg-primary count-mail"></span>
                                </a>
                                <div className="iq-sub-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white">All Messages<small
                                                    className="badge  badge-light float-right pt-1">5</small></h5>
                                            </div>
                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/01.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Nik Emma Watson</h6>
                                                        <small className="float-left font-size-12">13 Jun</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/02.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                        <small className="float-left font-size-12">20 Apr</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/03.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Why do we use it?</h6>
                                                        <small className="float-left font-size-12">30 Jun</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/04.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Variations Passages</h6>
                                                        <small className="float-left font-size-12">12 Sep</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="/" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded" src="images/user/05.jpg" alt="" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                        <small className="float-left font-size-12">5 Dec</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul> */}
                    </div>
                    <ul className="navbar-list">
                        <li>
                            <a href="/" className="search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded">
                                <img src="images/user/1.jpg" className="img-fluid rounded mr-3" alt="user" />
                                <div className="caption">
                                    <h6 className="mb-0 line-height text-white">Nik jone</h6>
                                    <span className="font-size-12 text-white">Available</span>
                                </div>
                            </a>
                            <div className="iq-sub-dropdown iq-user-dropdown">
                                <div className="iq-card shadow-none m-0">
                                    <div className="iq-card-body p-0 ">
                                        <div className="bg-primary p-3">
                                            <h5 className="mb-0 text-white line-height">Hello Nik jone</h5>
                                            <span className="text-white font-size-12">Available</span>
                                        </div>
                                        <a href="profile.html" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="media align-items-center">
                                                <div className="rounded iq-card-icon iq-bg-primary">
                                                    <i className="ri-file-user-line"></i>
                                                </div>
                                                <div className="media-body ml-3">
                                                    <h6 className="mb-0 ">My Profile</h6>
                                                    <p className="mb-0 font-size-12">View personal profile details.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="profile-edit.html" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="media align-items-center">
                                                <div className="rounded iq-card-icon iq-bg-primary">
                                                    <i className="ri-profile-line"></i>
                                                </div>
                                                <div className="media-body ml-3">
                                                    <h6 className="mb-0 ">Edit Profile</h6>
                                                    <p className="mb-0 font-size-12">Modify your personal details.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="account-setting.html" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="media align-items-center">
                                                <div className="rounded iq-card-icon iq-bg-primary">
                                                    <i className="ri-account-box-line"></i>
                                                </div>
                                                <div className="media-body ml-3">
                                                    <h6 className="mb-0 ">Account settings</h6>
                                                    <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="privacy-setting.html" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="media align-items-center">
                                                <div className="rounded iq-card-icon iq-bg-primary">
                                                    <i className="ri-lock-line"></i>
                                                </div>
                                                <div className="media-body ml-3">
                                                    <h6 className="mb-0 ">Privacy Settings</h6>
                                                    <p className="mb-0 font-size-12">Control your privacy parameters.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="d-inline-block w-100 text-center p-3">
                                            <a className="btn btn-primary dark-btn-primary" href="sign-in.html" role="button">Sign
                                                out<i className="ri-login-box-line ml-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default AppHeader