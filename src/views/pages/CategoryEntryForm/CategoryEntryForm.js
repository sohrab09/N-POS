import React, { useEffect, useState } from 'react'
import { Get, Post, Put } from '../../../http/http';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const CategoryEntryForm = () => {

    // All States Here
    const [loading, setLoading] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [getParentCategoryId, setGetParentCategoryId] = useState([]);
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [getAllCategory, setGetAllCategory] = useState([]);

    console.log("getAllCategory --------->>>>>>>> ", getAllCategory)

    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [csEditModal, setCsEditModal] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editCategoryId, setEditCategoryId] = useState('');
    const [editCategoryName, setEditCategoryName] = useState('');
    const [editParentCategoryId, setEditParentCategoryId] = useState('');

    // All Handlers Here

    const handleCategoryName = (e) => {
        setCategoryName(e.target.value)
    };

    const handleParentCategoryId = (e) => {
        setParentCategoryId(e.target.value)
    };

    const handleEditCategoryName = (e) => {
        setEditCategoryName(e.target.value)
    };

    const handleEditParentCategoryId = (e) => {
        setEditParentCategoryId(e.target.value)
    };

    // Clear Inputs
    const clearInputs = () => {
        setCategoryName('');
        setParentCategoryId('');
    };

    useEffect(() => {
        const getParentCategory = async () => {
            try {
                Get('api/Category/GetAll')
                    .then(res => {
                        // console.log("res getParentCategory--------->>>>>>>> ", res.data.data)
                        if (res.data.statusCode === 200) {
                            setGetParentCategoryId(res.data.data)
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        }
        getParentCategory()
    }, [])

    // Create Category
    const createCategory = async () => {
        if (categoryName === '' || categoryName === null || categoryName === undefined) {
            alert('Please Enter Category Name')
            return;
        }
        const data = {
            categoryName: categoryName,
            parentCategoryId: parentCategoryId ? +parentCategoryId : null,
            image: null
        }

        console.log("data --------->>>>>>>> ", data)

        try {
            await Post('api/Category/Add', data)
                .then(res => {
                    // console.log("res --------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        clearInputs()
                        alert(res.data.message)
                        getAllCategories()
                        setShowAddModal(false)
                    }
                })
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    };


    // Get All Category

    const getAllCategories = async () => {
        setLoading(true)
        try {
            await Get('api/Category/GetAll')
                .then(res => {
                    // console.log("res getAllCategories--------->>>>>>>> ", res.data.data)
                    if (res.data.statusCode === 200) {
                        setLoading(false)
                        setGetAllCategory(res.data.data)
                    }
                })
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    };

    useEffect(() => {
        getAllCategories()
    }, [])

    const handleShowAddModal = () => {
        setCsAddModal(!csAddModal);
        setShowAddModal(true);
    };

    // Show Edit Modal
    const handleShowEditModal = (supplier) => {
        // console.log("supplier", supplier)
        setCsEditModal(!csEditModal);
        setShowEditModal(true);
        setEditCategoryId(supplier.id);
        setEditCategoryName(supplier.categoryName)
        setEditParentCategoryId(supplier.parentCategoryId)
    };


    const updateCategory = async () => {
        const data = {
            id: editCategoryId,
            categoryName: editCategoryName,
            parentCategoryId: editParentCategoryId ? +editParentCategoryId : null,
        }
        console.log("data --------->>>>>>>> ", data)
        try {
            await Put('api/Category/Edit', data)
                .then(res => {
                    // console.log("res --------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message)
                        getAllCategories();
                        setShowEditModal(false);
                    }
                })
        } catch (error) {
            console.log(error)
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
                                        <h4 className="card-title">Category Entry Form</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="needs-validation">
                                        <div className="form-group row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="categoryName">Category Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="categoryName"
                                                    value={editCategoryName}
                                                    onChange={handleEditCategoryName}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="parentCategory">Parent Category</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="parentCategory"
                                                        value={editParentCategoryId}
                                                        onChange={handleEditParentCategoryId}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {
                                                            getParentCategoryId.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="categoryImage">Category Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="categoryImage"
                                                />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={updateCategory}>Update</button>
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
                        Add Category
                    </Button>
                    <Modal
                        show={showAddModal}
                        onHide={() => setShowAddModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Category Entry Form</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="needs-validation">
                                        <div className="form-group row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="categoryName">Category Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="categoryName"
                                                    value={categoryName}
                                                    onChange={handleCategoryName}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="parentCategory">Parent Category</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="parentCategory"
                                                        value={parentCategoryId}
                                                        onChange={handleParentCategoryId}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {
                                                            getParentCategoryId.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="categoryImage">Category Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="categoryImage"
                                                />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={createCategory}>Submit</button>
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
                    loading === true ? <div>Loading .....</div> : (<Table id="example" className="display">
                        <thead style={{ backgroundColor: '#704cb6', color: '#fff', fontSize: '15px', fontWeight: 'bolder' }}>
                            <tr>
                                <th>S/N</th>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getAllCategory?.map((category, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{category.categoryName}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleShowEditModal(category)}
                                            >Edit</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>)
                }

            </div>
        </div>
    )
}

export default CategoryEntryForm