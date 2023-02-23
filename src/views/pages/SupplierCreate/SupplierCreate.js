import React from 'react'

const SupplierCreate = () => {
    return (
        <div className="row">
            <div className="col-sm-12 col-lg-12">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Supplier Create Form</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <form
                            className="needs-validation"
                            novalidate
                        >
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom02">Supplier ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom02"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom01">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom03">Email</label>
                                    <input
                                        type="email"
                                        id="validationCustom03"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Phone</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Supplier Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Note</label>
                                    <textarea
                                        className="form-control"
                                        id="validationTextarea"
                                        placeholder="Any Special Note"
                                        required
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierCreate;