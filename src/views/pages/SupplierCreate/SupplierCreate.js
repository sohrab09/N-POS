import React, { useState } from 'react'
import { Post } from '../../../http/http';

const SupplierCreate = () => {

    // All States Here
    const [supplierId, setSupplierId] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // const [image, setImage] = useState('');
    const [note, setNote] = useState('');

    // All Handlers Here
    const handleSupplierId = (e) => {
        setSupplierId(e.target.value)
    };

    const handleFullName = (e) => {
        setFullName(e.target.value)
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const handlePhone = (e) => {
        setPhone(e.target.value)
    };

    const handleNote = (e) => {
        setNote(e.target.value)
    };


    // Clear Inputs
    const clearInputs = () => {
        setSupplierId('');
        setFullName('');
        setEmail('');
        setPhone('');
        setNote('');
    }

    // Create Supplier
    const createSupplier = async () => {
        const data = {
            supplierId: supplierId,
            fullName: fullName,
            email: email,
            phone: phone,
            note: note
        }

        console.log("data --------->>>>>>>> ", data)

        try {
            await Post('api/Supplier/Add', data)
                .then(res => {
                    console.log("res --------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message)
                        clearInputs()
                    }
                })
        } catch (error) {
            console.log("Supplier Create Error ----->>>>>", error)
            alert(error.response.data.message)
        }
    }

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
                        <div className="needs-validation">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="supplierId">Supplier ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="supplierId"
                                        value={supplierId}
                                        onChange={handleSupplierId}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        value={fullName}
                                        onChange={handleFullName}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        value={phone}
                                        onChange={handlePhone}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="supplierPhoto">Supplier Photo (Not Mandatory)</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="supplierPhoto"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="note">Note</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Any Special Note"
                                        id="note"
                                        value={note}
                                        onChange={handleNote}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={createSupplier}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierCreate;