import React, { useEffect, useState } from 'react'
import { Get, Post, Put } from '../../../http/http'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



const sourceChoice = [
    { id: 1, name: 'Facebook' },
    { id: 2, name: 'Instagram' },
    { id: 3, name: 'Google' },
    { id: 4, name: 'Other' },
]

const CustomerCreate = () => {

    const toastOptions = {
        position: "bottom-center",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    };


    // All States Here
    const [loading, setLoading] = useState(false)
    const [fullName, setFullName] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [getAllCustomerType, setAllCustomerType] = useState([])
    const [customerType, setCustomerType] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [getAllGender, setAllGender] = useState([])
    const [gender, setGender] = useState('')
    const [image, setImage] = useState('')
    const [source, setSource] = useState('')
    const [note, setNote] = useState('')
    const [getAllCustomer, setAllCustomer] = useState([]);
    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [csEditModal, setCsEditModal] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editName, setEditName] = useState('');
    const [editCustomerId, setEditCustomerId] = useState('');
    const [editCustomerType, setEditCustomerType] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [editGender, setEditGender] = useState('');
    const [editSource, setEditSource] = useState('');
    const [editNote, setEditNote] = useState('');
    const [csID, setCsID] = useState('');

    // Edit Data

    // All Handlers Here
    const handleFullName = (e) => {
        setFullName(e.target.value)
    };

    const handleCustomerId = (e) => {
        setCustomerId(e.target.value)
    };

    const handleCustomerType = (e) => {
        setCustomerType(e.target.value)
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const handlePhone = (e) => {
        setPhone(e.target.value)
    };

    const handleGender = (e) => {
        setGender(e.target.value)
    };

    const handleSource = (e) => {
        setSource(e.target.value)
    };

    const handleNote = (e) => {
        setNote(e.target.value)
    };

    const handleImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        console.log("base64 --------->>>>>>>> ", base64)
        setImage(base64)
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    };

    const handleEditName = (e) => {
        setEditName(e.target.value)
    };

    const handleEditCustomerId = (e) => {
        setEditCustomerId(e.target.value)
    };

    const handleEditCustomerType = (e) => {
        setEditCustomerType(e.target.value)
    };

    const handleEditEmail = (e) => {
        setEditEmail(e.target.value)
    };

    const handleEditPhone = (e) => {
        setEditPhone(e.target.value)
    };

    const handleEditGender = (e) => {
        setEditGender(e.target.value)
    };

    const handleEditSource = (e) => {
        setEditSource(e.target.value)
    };

    const handleEditNote = (e) => {
        setEditNote(e.target.value)
    };


    // All Functions Here

    // get All Customer Type
    useEffect(() => {
        const getAllCustomerTypes = () => {
            try {
                Get('api/CustomerType/GetAll')
                    .then((res) => {
                        // console.log("getAllCustomerTypes", res.data.data)
                        setAllCustomerType(res.data.data)
                    })
            } catch (error) {

            }
        };
        getAllCustomerTypes()
    }, []);

    // get All Gender
    useEffect(() => {
        const getGenderTypes = () => {
            try {
                Get('api/Gender/Get')
                    .then((res) => {
                        // console.log("getGenderTypes", res.data.data)
                        setAllGender(res.data.data)
                    })
            } catch (error) {

            }
        };
        getGenderTypes()
    }, [])

    // Form Validation

    const validateForm = () => {
        if (fullName.length > 32) {
            toast.error("Full Name is too long, Max 32 character", toastOptions);
            return false;
        } else if (fullName === '' || fullName === undefined || fullName === null) {
            toast.error("Full Name is required", toastOptions);
            return false;
        }
        else if (!fullName.match(/^[a-zA-Z ]*$/)) {
            toast.error("No need special character in full name", toastOptions);
            return false;
        } else if (customerId.length > 24) {
            toast.error("Customer ID is too long, Max 24 character", toastOptions);
            return false;
        } else if (customerId === '' || customerId === undefined || customerId === null) {
            toast.error("Customer ID is required", toastOptions);
            return false;
        } else if (!customerId.match(/^[a-zA-Z0-9]*$/)) {
            toast.error("No need special character in customer ID", toastOptions);
            return false;
        } else if (email.length > 32) {
            toast.error("Email is too long, Max 32 character", toastOptions);
            return false;
        } else if (phone.length > 16) {
            toast.error("Phone is too long, Max 16 character", toastOptions);
            return false;
        } else if (phone === '' || phone === undefined || phone === null) {
            toast.error("Phone is required", toastOptions);
            return false;
        } else if (!phone.match(/^[0-9]*$/)) {
            toast.error("No need special character in phone number", toastOptions);
            return false;
        } else if (note.length > 256) {
            toast.error("Note is too long, Max 256 character", toastOptions);
            return false;
        }
        else if (image.length > 5000000) {
            toast.error("Image size should be less than 5mb", toastOptions);
            return false;
        }
        else {
            return true;
        }
    }

    // After Submit Clear All Fields

    const clearInputs = () => {
        setFullName('')
        setCustomerId('')
        setCustomerType('')
        setEmail('')
        setPhone('')
        setGender('')
        setImage('')
        setSource('')
        setNote('')
    }

    // Create Customer

    const createCustomer = async () => {
        if (validateForm()) {
            const data = {
                customer_id: customerId,
                customer_type_id: +customerType,
                full_name: fullName,
                email: email,
                phone: +phone,
                gender: +gender,
                image: image,
                source_id: +source,
                note: note,
            };

            console.log("data ------------->>>>>>>>>> ", data)

            try {
                await Post('api/Customer/Add', data)
                    .then((res) => {
                        console.log("Customer Create Response ----->>>>>", res)
                        if (res.data.statusCode === 200) {
                            toast.success(res.data.message, toastOptions);
                            clearInputs()
                        }
                    })
            } catch (error) {
                console.log("Customer Create Error ----->>>>>", error)
                toast.error('Something went wrong', toastOptions);
            }
        }
    };


    // Get All Customer
    const getAllCustomers = async () => {
        setLoading(true)
        try {
            await Get('api/Customer/GetAll')
                .then((res) => {
                    // console.log("getAllCustomer", res)
                    if (res.status === 200) {
                        setLoading(false)
                        setAllCustomer(res.data.data)
                    }
                })
        } catch (error) {
            setLoading(false)
            console.log("getAllCustomer Error ----->>>>>", error)
        }
    };

    useEffect(() => {
        getAllCustomers()
    }, [])


    // Show Add Modal
    const handleShowAddModal = () => {
        setCsAddModal(!csAddModal);
        setShowAddModal(true);
    };


    // Show Edit Modal
    const handleShowEditModal = (customer) => {
        // console.log("customer", customer)
        setCsEditModal(!csEditModal);
        setShowEditModal(true);
        setCsID(customer.id_cib)
        setEditName(customer.full_name)
        setEditCustomerId(customer.customer_id)
        setEditCustomerType(customer.customer_type_id)
        setEditEmail(customer.email)
        setEditPhone(customer.phone)
        setEditGender(customer.gender)
        setEditSource(customer.source_id)
        setEditNote(customer.note)
    };

    // Edit Customer
    const editCustomer = async () => {
        const data = {
            id_cib: csID,
            customer_id: editCustomerId,
            customer_type_id: +editCustomerType,
            full_name: editName,
            email: editEmail,
            phone: +editPhone,
            gender: +editGender,
            image: image,
            source_id: +editSource,
            note: editNote,
        };

        // console.log("data ------------->>>>>>>>>> ", data)
        try {
            await Put('api/Customer/Edit', data)
                .then((res) => {
                    // console.log("Customer Edit Response ----->>>>>", res)
                    if (res.data.statusCode === 200) {
                        toast.success(res.data.message, toastOptions);
                        getAllCustomers();
                        setShowEditModal(false);
                    }
                })
        } catch (error) {
            console.log("Customer Edit Error ----->>>>>", error)
            toast.error('Something went wrong', toastOptions);
        }
    };

    return (
        <div className="container-fluid p-0 m-0">
            <div className='d-flex justify-content-between'>
                <div>
                    <Modal
                        show={showEditModal}
                        onHide={() => setShowEditModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Customer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <div className="iq-card">
                                        <div className="iq-card-body">
                                            <div className="needs-validation">
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="fullName">Full Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="fullName"
                                                            value={editName}
                                                            onChange={handleEditName}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="customerId">Customer ID</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="customerId"
                                                            value={editCustomerId}
                                                            onChange={handleEditCustomerId}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustomUsername">Customer Type</label>
                                                        <div className="input-group">
                                                            <select
                                                                className="form-control"
                                                                id="validationCustom04"
                                                                value={editCustomerType}
                                                                onChange={handleEditCustomerType}
                                                            >
                                                                <option value="">Choose...</option>
                                                                {
                                                                    getAllCustomerType.map((item, index) => {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={item.id_customer_type}
                                                                                onChange={handleSource}
                                                                            >{item.name}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustom03">Email</label>
                                                        <input
                                                            type="email"
                                                            id="validationCustom03"
                                                            className="form-control"
                                                            value={editEmail}
                                                            onChange={handleEditEmail}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustom04">Phone</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="validationCustom04"
                                                            value={editPhone}
                                                            onChange={handleEditPhone}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustomUsername">Gender</label>
                                                        <div className="input-group">
                                                            <select
                                                                className="form-control"
                                                                id="validationCustom04"
                                                                value={editGender}
                                                                onChange={handleEditGender}
                                                            >
                                                                <option value="">Choose...</option>
                                                                {
                                                                    getAllGender.map((item, index) => {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={item.id}
                                                                            >{item.type}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustom04">Photo</label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="validationCustom04"
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustomUsername">Source</label>
                                                        <div className="input-group">
                                                            <select
                                                                className="form-control"
                                                                id="validationCustom04"
                                                                value={editSource}
                                                                onChange={handleEditSource}
                                                            >
                                                                <option value="">Choose...</option>
                                                                {
                                                                    sourceChoice.map((item, index) => {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={item.id}
                                                                                onChange={handleSource}
                                                                            >{item.name}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustom04">Note</label>
                                                        <textarea
                                                            className="form-control"
                                                            id="validationTextarea"
                                                            placeholder="Any Special Note"
                                                            value={editNote}
                                                            onChange={handleEditNote}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary" onClick={editCustomer}>Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <div>
                    <Button
                        className="btn btn-primary"
                        onClick={() => handleShowAddModal(!csAddModal)}
                    >
                        Add Customer
                    </Button>
                    <Modal
                        show={showAddModal}
                        onHide={() => setShowAddModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Customer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <div className="iq-card">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Customer Create Form</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <div className="needs-validation">
                                                <div className="form-row">
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
                                                        <label htmlFor="customerId">Customer ID</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="customerId"
                                                            value={customerId}
                                                            onChange={handleCustomerId}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustomUsername">Customer Type</label>
                                                        <div className="input-group">
                                                            <select
                                                                className="form-control"
                                                                id="validationCustom04"
                                                                value={customerType}
                                                                onChange={handleCustomerType}
                                                            >
                                                                <option value="">Choose...</option>
                                                                {
                                                                    getAllCustomerType.map((item, index) => {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={item.id_customer_type}
                                                                                onChange={handleSource}
                                                                            >{item.name}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustom03">Email</label>
                                                        <input
                                                            type="email"
                                                            id="validationCustom03"
                                                            className="form-control"
                                                            value={email}
                                                            onChange={handleEmail}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustom04">Phone</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="validationCustom04"
                                                            value={phone}
                                                            onChange={handlePhone}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustomUsername">Gender</label>
                                                        <div className="input-group">
                                                            <select
                                                                className="form-control"
                                                                id="validationCustom04"
                                                                value={gender}
                                                                onChange={handleGender}
                                                            >
                                                                <option value="">Choose...</option>
                                                                {
                                                                    getAllGender.map((item, index) => {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={item.id}
                                                                            >{item.type}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustom04">Photo</label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="validationCustom04"
                                                            onChange={(e) => handleImage(e)}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustomUsername">Source</label>
                                                        <div className="input-group">
                                                            <select
                                                                className="form-control"
                                                                id="validationCustom04"
                                                                value={source}
                                                                onChange={handleSource}
                                                            >
                                                                <option value="">Choose...</option>
                                                                {
                                                                    sourceChoice.map((item, index) => {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={item.id}
                                                                                onChange={handleSource}
                                                                            >{item.name}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationCustom04">Note</label>
                                                        <textarea
                                                            className="form-control"
                                                            id="validationTextarea"
                                                            placeholder="Any Special Note"
                                                            value={note}
                                                            onChange={handleNote}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-primary" onClick={createCustomer}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
            <br />
            <div>
                {
                    loading === true ? <div>Loading .....</div> : (<Table id="example" className="display">
                        <thead style={{ backgroundColor: '#704cb6', color: '#fff', fontSize: '15px', fontWeight: 'bolder' }}>
                            <tr>
                                <th>Customer ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Balance</th>
                                <th>Points</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getAllCustomer.map((customer, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{customer.customer_id ? customer.customer_id : 'null'}</td>
                                        <td>{customer.full_name ? customer.full_name : 'null'}</td>
                                        <td>{customer.email ? customer.email : 'null'}</td>
                                        <td>{customer.phone ? customer.phone : 'null'}</td>
                                        <td>{customer.balance ? customer.balance : 'null'}</td>
                                        <td>{customer.points ? customer.points : 'null'}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleShowEditModal(customer)}
                                            >Edit</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>)
                }

            </div>

            <ToastContainer />
        </div>
    )
}

export default CustomerCreate;