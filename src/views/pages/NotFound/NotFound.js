import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../../../images/notFound.png'

const NotFound = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-sm-12 text-center">
                        <div className="iq-error error-500">
                            <img src={notFound} className="img-fluid iq-error-img" alt="" />
                            <h2 className="mb-0">Oops! This Page is Not Working.</h2>
                            <p>We are working on it.</p>
                            <Link className="btn btn-primary mt-3" to={'/user/userCreate'}>Back to Main Page</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound