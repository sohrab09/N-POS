import React, { useEffect, useState } from 'react'
import { Get, Post, Put } from '../../../http/http';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const UnitEntryForm = () => {

    // All States Here
    const [loading, setLoading] = useState(false);
    const [unitName, setUnitName] = useState('');
    const [getAllUnit, setGetAllUnit] = useState([]);

    // Edit Unit State
    const [editUnitName, setEditUnitName] = useState('');
    const [editUnitId, setEditUnitId] = useState('');

    // Modal State
    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [csEditModal, setCsEditModal] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);


    // All Handler Here
    const handleUnitName = (e) => {
        setUnitName(e.target.value);
    };

    const handleEditUnitName = (e) => {
        setEditUnitName(e.target.value);
    };


    // Create Unit
    const createUnit = () => {
        if (unitName === '' || unitName === null || unitName === undefined) {
            alert('Please Enter Unit Name');
            return;
        }
        const data = {
            unitName: unitName,
            image: null
        }
        console.log("data --------->>>>>>>> ", data);

        try {
            Post('api/Unit/Add', data)
                .then(res => {
                    // console.log("res createUnit--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message);
                        setUnitName('');
                        setShowAddModal(false);
                        getAllUnits();
                    }
                })
        } catch (error) {
            console.log("Unit Entry Error ----->>>>>", error)
        }
    };

    // Get ALl Unit
    const getAllUnits = async () => {
        setLoading(true);
        try {
            await Get('api/Unit/GetAll')
                .then(res => {
                    console.log("res getAllUnits --------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        setGetAllUnit(res.data.data);
                        setLoading(false);
                    }
                })
        } catch (error) {
            setLoading(false);
            console.log("Get All Units Error ----->>>>>", error)
        }
    };

    useEffect(() => {
        getAllUnits();
    }, [])


    // Add Modal and Edit Modal Function
    const handleShowAddModal = () => {
        setCsAddModal(!csAddModal);
        setShowAddModal(true);
    };

    // Show Edit Modal
    const handleShowEditModal = (unit) => {
        setCsEditModal(!csEditModal);
        setShowEditModal(true);
        setEditUnitName(unit.unitName);
        setEditUnitId(unit.id);
    };

    const editUnit = async () => {
        const data = {
            id: editUnitId,
            unitName: editUnitName,
        };

        // console.log("data --------->>>>>>>> ", data);

        try {
            await Put('api/Unit/Edit', data)
                .then(res => {
                    // console.log("res editUnit--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message);
                        setEditUnitName('');
                        setEditUnitId('');
                        setShowEditModal(false);
                        getAllUnits();
                    }
                })
        } catch (error) {
            console.log("Edit Unit Error ----->>>>>", error)
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
                            <Modal.Title>Edit Unit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Unit Entry Form</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="needs-validation">
                                        <div className="form-group row">
                                            <div className="col-md-6 col-lg-12 mb-3">
                                                <label htmlFor="unitName">Unit Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="unitName"
                                                    value={editUnitName}
                                                    onChange={handleEditUnitName}
                                                />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={editUnit}>Update</button>
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
                        Add Unit
                    </Button>
                    <Modal
                        show={showAddModal}
                        onHide={() => setShowAddModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Unit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Unit Entry Form</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="needs-validation">
                                        <div className="form-group row">
                                            <div className="col-md-6 col-lg-12 mb-3">
                                                <label htmlFor="unitName">Unit Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="unitName"
                                                    value={unitName}
                                                    onChange={handleUnitName}
                                                />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={createUnit}>Submit</button>
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
                                    <th>Unit Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getAllUnit.map((unit, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{unit.unitName}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => handleShowEditModal(unit)}
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

export default UnitEntryForm