import React from 'react'

const ProductEntryForm = () => {
    return (
        <div className="row">
            <div className="col-sm-12 col-lg-12">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Product Entry Form</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <form
                            className="needs-validation"
                            novalidate
                        >
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom02">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom02"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom01">Product Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustomUsername">Category</label>
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
                                    <label for="validationCustomUsername">Sub Category</label>
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
                                    <label for="validationCustomUsername">Brand</label>
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
                                <div className="col-md-6 mb-3 d-flex justify-content-around align-items-center">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadio6" name="customRadio-1" class="custom-control-input" />
                                        <label class="custom-control-label" for="customRadio6">Type</label>
                                    </div>
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" class="custom-control-input" id="customCheck5" />
                                        <label class="custom-control-label" for="customCheck5">VAT</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">VAT (%) </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustomUsername">Unit</label>
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
                                    <label for="validationCustom04">Minimum Stock </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Maximum Stock</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Purchase Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Sales Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Product Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="validationTextarea"
                                        placeholder="Product Description"
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

export default ProductEntryForm