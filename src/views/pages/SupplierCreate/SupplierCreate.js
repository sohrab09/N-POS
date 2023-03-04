import React, { useEffect, useState } from 'react'
import { Get, Post, Put } from '../../../http/http';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



const SupplierCreate = () => {

    // All States Here
    const [loading, setLoading] = useState(false)
    const [supplierId, setSupplierId] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // const [image, setImage] = useState('');
    const [note, setNote] = useState('');
    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [csEditModal, setCsEditModal] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [getAllSupplier, setGetAllSupplier] = useState([]);
    const [editSupplierId, setEditSupplierId] = useState('');
    const [editFullName, setEditFullName] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [editNote, setEditNote] = useState('');
    const [spID, setSpID] = useState('');
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

    const handleEditSupplierId = (e) => {
        setEditSupplierId(e.target.value)
    };

    const handleEditFullName = (e) => {
        setEditFullName(e.target.value)
    };

    const handleEditEmail = (e) => {
        setEditEmail(e.target.value)
    };

    const handleEditPhone = (e) => {
        setEditPhone(e.target.value)
    };

    const handleEditNote = (e) => {
        setEditNote(e.target.value)
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
                        getAllSuppliers();
                        setShowEditModal(false);
                    }
                })
        } catch (error) {
            console.log("Supplier Create Error ----->>>>>", error)
            alert(error.response.data.message)
        }
    }

    // Get All Supplier
    const getAllSuppliers = async () => {
        setLoading(true)
        try {
            Get('api/Supplier/GetAll')
                .then(res => {
                    // console.log("res --------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        setLoading(false)
                        setGetAllSupplier(res.data.data)
                    }
                })
        } catch (error) {
            setLoading(false)
            console.log("Supplier Create Error ----->>>>>", error)
            alert(error.response.data.message)
        }
    };

    useEffect(() => {
        getAllSuppliers()
    }, [])

    // Show Add Modal
    const handleShowAddModal = () => {
        setCsAddModal(!csAddModal);
        setShowAddModal(true);
    };

    // Show Edit Modal
    const handleShowEditModal = (supplier) => {
        // console.log("supplier", supplier)
        setCsEditModal(!csEditModal);
        setShowEditModal(true);
        setSpID(supplier.id)
        setEditSupplierId(supplier.supplierId);
        setEditFullName(supplier.fullName);
        setEditEmail(supplier.email);
        setEditPhone(supplier.phone);
        setEditNote(supplier.note);
    };


    // Edit Supplier
    const editSupplier = async () => {
        const data = {
            id: spID,
            supplierId: editSupplierId,
            fullName: editFullName,
            email: editEmail,
            phone: editPhone,
            note: editNote
        }

        console.log("data --------->>>>>>>> ", data)

        try {
            await Put('api/Supplier/Edit', data)
                .then(res => {
                    console.log("res --------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message)
                        getAllSuppliers();
                        setShowEditModal(false);
                    }
                })
        } catch (error) {
            console.log("Supplier Create Error ----->>>>>", error)
            alert(error.response.data.message)
        }
    };

    return (
        <div className="container-fluid p-0 m-0">
            <div className='d-flex justify-content-between'>

                {/* Edit Modal */}

                <div>
                    <Modal
                        show={showEditModal}
                        onHide={() => setShowEditModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Supplier</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Supplier Edit Form</h4>
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
                                                    value={editSupplierId}
                                                    onChange={handleEditSupplierId}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullName"
                                                    value={editFullName}
                                                    onChange={handleEditFullName}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    value={editEmail}
                                                    onChange={handleEditEmail}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="phone"
                                                    value={editPhone}
                                                    onChange={handleEditPhone}
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
                                                    value={editNote}
                                                    onChange={handleEditNote}
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={editSupplier}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>

                {/* Add Modal */}

                <div>
                    <Button
                        className="btn btn-primary"
                        onClick={() => handleShowAddModal(!csAddModal)}
                    >
                        Add Supplier
                    </Button>
                    <Modal
                        show={showAddModal}
                        onHide={() => setShowAddModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Supplier</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
            <br />

            {/* Data Table */}

            <div>
                {
                    loading === true ?
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <Table id="example" className="display">
                            <thead style={{ backgroundColor: '#704cb6', color: '#fff', fontSize: '15px', fontWeight: 'bolder' }}>
                                <tr>
                                    <th>Supplier ID</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getAllSupplier?.map((supplier, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{supplier.supplierId ? supplier.supplierId : 'null'}</td>
                                            <td>{supplier.fullName ? supplier.fullName : 'null'}</td>
                                            <td>{supplier.email ? supplier.email : 'null'}</td>
                                            <td>{supplier.phone ? supplier.phone : 'null'}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => handleShowEditModal(supplier)}
                                                >Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                }

            </div>
        </div>
    )
}

export default SupplierCreate;