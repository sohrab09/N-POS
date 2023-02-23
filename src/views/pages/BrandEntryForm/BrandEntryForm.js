import React from 'react'

const BrandEntryForm = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Brand Entry Form</h4>
                    </div>
                </div>
                <div className="iq-card-body">
                    <form
                        className="needs-validation"
                        novalidate
                    >
                        <div className="form-group row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom02">Brand Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustom02"
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom04">Brand Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="validationCustom04"
                                    required
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BrandEntryForm