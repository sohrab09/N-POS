import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Get, Post, Put } from '../../../http/http';
import './Attributes.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const Attributes = () => {

    // All States Here
    const [loading, setLoading] = useState(false);
    const [attributeName, setAttributeName] = useState('');
    const [inputValues, setInputValues] = useState([]);
    const [getAllAttributes, setGetAllAttributes] = useState([]);

    // Edit Attributes States
    const [editAttributeId, setEditAttributeId] = useState('');
    const [editAttributeName, setEditAttributeName] = useState('');
    const [editInputValues, setEditInputValues] = useState([]);

    // Modal State
    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [csEditModal, setCsEditModal] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);


    // All Handlers Here

    const handleAttributeName = (e) => {
        setAttributeName(e.target.value)
    };

    const handleEditAttributeName = (e) => {
        setEditAttributeName(e.target.value)
    };

    const handleButtonClick = () => {
        setInputValues([...inputValues, '']);
    };

    const handleEditButtonClick = () => {
        setEditInputValues([...editInputValues, { attributeName: '' }]);
    };

    const handleInputChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
    };

    const handleEditInputChange = (index, event) => {
        const newEditInputValues = [...editInputValues];
        newEditInputValues[index] = event.target.value;
        setEditInputValues(newEditInputValues);
    };


    // Clear Inputs
    const clearInputs = () => {
        setAttributeName('');
        setInputValues([]);
    };

    const handleSubmit = () => {

        if (attributeName === '' || attributeName === null || attributeName === undefined) {
            alert('Please Enter Attribute Name')
            return;
        }
        const inp = inputValues.map((item) => {
            return {
                attributeName: item
            }
        })

        // console.log("inp --------->>>>>>>> ", inp)

        const data = {
            attributeName: attributeName,
            attributeDetails: inp
        }
        console.log("data --------->>>>>>>> ", data)

        try {
            Post('api/Attribute/Add', data)
                .then(res => {
                    // console.log("res createCategory--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message);
                        clearInputs();
                        getAllAttribute();
                        setShowAddModal(false);
                    }
                })
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    };

    // Edit Attribute
    const handleEditSubmit = () => {
        if (editAttributeName === '' || editAttributeName === null || editAttributeName === undefined) {
            alert('Please Enter Attribute Name')
            return;
        }
        const inp = editInputValues.map((item) => {
            // console.log("item --------->>>>>>>> ", item)
            return {
                attributeName: item.attributeName ? item.attributeName : item,
                attributeId: item.attributeId ? item.attributeId : editAttributeId,
                id: item.id ? item.id : 0
            }
        })

        // console.log("inp --------->>>>>>>> ", inp)

        const data = {
            id: editAttributeId,
            attributeName: editAttributeName,
            attributeDetails: inp
        }
        console.log("data --------->>>>>>>> ", data)

        try {
            Put('api/Attribute/Edit', data)
                .then(res => {
                    console.log("res Edit Attribute--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message);
                        setEditAttributeName('');
                        setEditInputValues([]);
                        setShowEditModal(false);
                        getAllAttribute();
                    }
                })
        } catch (error) {
            console.log("Edit Attribute Error ----->>>>>", error)
        }
    };

    // Get All Attributes
    const getAllAttribute = () => {
        setLoading(true);
        try {
            Get('api/Attribute/GetAll')
                .then(res => {
                    // console.log("res getAllAttribute--------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        setGetAllAttributes(res.data.data)
                        setLoading(false);
                    }
                })
        } catch (error) {
            setLoading(false);
            console.log("Get All Attributes Error ----->>>>>", error)
        }
    };

    useEffect(() => {
        getAllAttribute();
    }, [])

    // Add Modal and Edit Modal Function
    const handleShowAddModal = () => {
        setCsAddModal(!csAddModal);
        setShowAddModal(true);
    };

    // Show Edit Modal
    const handleShowEditModal = (attribute) => {
        console.log("attribute --------->>>>>>>> ", attribute)
        setCsEditModal(!csEditModal);
        setShowEditModal(true);
        const id = attribute.id;

        try {
            Get(`api/Attribute/GetById?id=${id}`)
                .then(res => {
                    // console.log(`res Edit Attribute--------->>>>>>>> `, res)
                    if (res.data.statusCode === 200) {
                        setEditAttributeId(res.data.data.id)
                        setEditAttributeName(res.data.data.attributeName);
                        setEditInputValues(res.data.data.attributeDetails);
                    }
                })
        } catch (error) {
            console.log("Edit Attribute Error ----->>>>>", error)
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
                            <Modal.Title>Edit Attribute</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Attribute Edit Form</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="needs-validation">
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="attributeName">Attribute Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="attributeName"
                                                    placeholder='Attribute Name'
                                                    value={editAttributeName}
                                                    onChange={handleEditAttributeName}
                                                />
                                            </div>
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6 mb-3">
                                                {
                                                    editInputValues.map((editData, index) => {
                                                        return (
                                                            <div className='mt-3' key={index}>
                                                                <div className='d-flex align-items-center'>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="attributeName"
                                                                        placeholder={`Attribute Value ${index + 1}`}
                                                                        value={editData.attributeName}
                                                                        onChange={(event) => handleEditInputChange(index, event)}
                                                                    />
                                                                    <span className="ml-3">
                                                                        <FontAwesomeIcon
                                                                            icon={faXmark}
                                                                            style={{ cursor: 'pointer', color: 'red' }}
                                                                            onClick={() => {
                                                                                const values = [...editInputValues];
                                                                                values.splice(index, 1);
                                                                                setEditInputValues(values);
                                                                            }}
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className="float-right">
                                                    <OverlayTrigger
                                                        placement="bottom"
                                                        overlay={<Tooltip id="button-tooltip-2">Add Attribute Value</Tooltip>}
                                                    >
                                                        {({ ref, ...triggerHandler }) => (
                                                            <FontAwesomeIcon
                                                                {...triggerHandler}
                                                                ref={ref}
                                                                icon={faPlus}
                                                                style={{ cursor: 'pointer', color: 'green' }}
                                                                className="btn btn-sm iq-bg-success mt-4"
                                                                onClick={handleEditButtonClick}
                                                            />
                                                        )}
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={handleEditSubmit}>Update</button>
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
                        Add Attribute
                    </Button>
                    <Modal
                        show={showAddModal}
                        onHide={() => setShowAddModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Attribute</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Attribute Create Form</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="needs-validation">
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="attributeName">Attribute Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="attributeName"
                                                    placeholder='Attribute Name'
                                                    value={attributeName}
                                                    onChange={handleAttributeName}
                                                />
                                            </div>
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6 mb-3">
                                                {inputValues.map((value, index) => (
                                                    <div className='mt-3' key={index}>
                                                        <div className='d-flex align-items-center'>
                                                            <input
                                                                key={index + 1}
                                                                type="text"
                                                                className="form-control"
                                                                placeholder={`Attribute Value ${index + 1}`}
                                                                value={value}
                                                                onChange={(event) => handleInputChange(index, event)}
                                                            />
                                                            <span className="ml-3">
                                                                <FontAwesomeIcon
                                                                    icon={faXmark}
                                                                    style={{ cursor: 'pointer', color: 'red' }}
                                                                    onClick={() => {
                                                                        const newInputValues = [...inputValues];
                                                                        newInputValues.splice(index, 1);
                                                                        setInputValues(newInputValues);
                                                                    }}
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="float-right">
                                                    <OverlayTrigger
                                                        placement="bottom"
                                                        overlay={<Tooltip id="button-tooltip-2">Add Attribute Value</Tooltip>}
                                                    >
                                                        {({ ref, ...triggerHandler }) => (
                                                            <FontAwesomeIcon
                                                                {...triggerHandler}
                                                                ref={ref}
                                                                icon={faPlus}
                                                                style={{ cursor: 'pointer', color: 'green' }}
                                                                className="btn btn-sm iq-bg-success mt-4"
                                                                onClick={handleButtonClick}
                                                            />
                                                        )}
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
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
                                <th>Attribute Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getAllAttributes.map((attribute, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{attribute.attributeName}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => handleShowEditModal(attribute)}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>)
                }

            </div>
        </div>
    )
}

export default Attributes;