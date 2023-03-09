import React, { useEffect, useState } from 'react'
import { Get, Post, Put } from '../../../http/http';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const BrandEntryForm = () => {

    // All States Here
    const [loading, setLoading] = useState(false);
    const [brandName, setBrandName] = useState('');
    const [error, setError] = useState(false)
    const [getAllBrand, setGetAllBrand] = useState([]);

    // Edit Brand State
    const [editBrandName, setEditBrandName] = useState('');
    const [editBrandId, setEditBrandId] = useState('');

    // Modal State
    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [csEditModal, setCsEditModal] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);


    // All Handler Here
    const handleBrandName = (e) => {
        setBrandName(e.target.value);
    };

    const handleEditBrandName = (e) => {
        setEditBrandName(e.target.value);
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
                    // console.log("res createBrand--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message);
                        setBrandName('');
                        setError(false);
                        setShowAddModal(false);
                        getAllBrands();
                    }
                })
        } catch (error) {
            console.log("Brand Entry Error ----->>>>>", error)
        }
    };

    // Get ALl Brand
    const getAllBrands = async () => {
        setLoading(true);
        try {
            await Get('api/Brand/GetAll')
                .then(res => {
                    // console.log("res getAllBrands--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        setGetAllBrand(res.data.data);
                        setLoading(false);
                    }
                })
        } catch (error) {
            setLoading(false);
            console.log("Get All Brands Error ----->>>>>", error)
        }
    };

    useEffect(() => {
        getAllBrands();
    }, [])


    // Add Modal and Edit Modal Function
    const handleShowAddModal = () => {
        setCsAddModal(!csAddModal);
        setShowAddModal(true);
    };

    // Show Edit Modal
    const handleShowEditModal = (brand) => {
        setCsEditModal(!csEditModal);
        setShowEditModal(true);
        setEditBrandName(brand.brandName);
        setEditBrandId(brand.id);
    };

    const editBrand = async () => {
        const data = {
            id: editBrandId,
            brandName: editBrandName,
        };

        // console.log("data --------->>>>>>>> ", data);

        try {
            await Put('api/Brand/Edit', data)
                .then(res => {
                    // console.log("res editBrand--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message);
                        setEditBrandName('');
                        setEditBrandId('');
                        setShowEditModal(false);
                        getAllBrands();
                    }
                })
        } catch (error) {
            console.log("Edit Brand Error ----->>>>>", error)
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
                            <Modal.Title>Edit Brand</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                                    value={editBrandName}
                                                    onChange={handleEditBrandName}
                                                />
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
                                        <button className="btn btn-primary" onClick={editBrand}>Update</button>
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
                        Add Brand
                    </Button>
                    <Modal
                        show={showAddModal}
                        onHide={() => setShowAddModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Brand</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
            <br />
            {/* Table */}
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
                                    <th>S/N</th>
                                    <th>Brand Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getAllBrand.map((brand, index) => {
                                        console.log("brand ----->>>>>", brand)
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{brand.brandName}</td>

                                                <td>
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => handleShowEditModal(brand)}
                                                    >
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                }

            </div>
        </div>
    )
}

export default BrandEntryForm