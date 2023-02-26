import React, { useState } from 'react'
import { Post } from '../../../http/http';

const BrandEntryForm = () => {

    // All States Here
    const [brandName, setBrandName] = useState('');
    const [error, setError] = useState(false)


    // All Handler Here
    const handleBrandName = (e) => {
        setBrandName(e.target.value);
    };


    // Create Brand
    const createBrand = () => {
        if (brandName === '' || brandName === null || brandName === undefined) {
            setError(true);
            return;
        }
        const data = {
            brandName: brandName,
            image: null
        }
        console.log("data --------->>>>>>>> ", data);

        try {
            Post('api/Brand/Add', data)
                .then(res => {
                    console.log("res createBrand--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message);
                        setBrandName('');
                        setError(false);
                    }
                })
        } catch (error) {
            console.log("Brand Entry Error ----->>>>>", error)
        }
    };

    return (
        <div className="container-fluid p-0 m-0">
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Brand Entry Form</h4>
                    </div>
                </div>
                <div className="iq-card-body">
                    <div className="needs-validation">
                        <div className="form-group row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="brandName">Brand Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="brandName"
                                    value={brandName}
                                    onChange={handleBrandName}
                                />
                                {error && brandName.length <= 0 ? <span className="text-danger">Please Enter Brand Name</span> : null}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="brandImage">Brand Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="brandImage"
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={createBrand}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandEntryForm