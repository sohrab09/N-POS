import React from 'react'

const CategoryEntryForm = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Category Entry Form</h4>
                    </div>
                </div>
                <div className="iq-card-body">
                    <form
                        className="needs-validation"
                        novalidate
                    >
                        <div className="form-group row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom02">Category Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustom02"
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustomUsername">Parent Category</label>
                                <div className="input-group">
                                    <select
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    >
                                        <option selected disabled value="">Choose...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom04">Category Image</label>
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

export default CategoryEntryForm