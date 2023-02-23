import React, { useEffect, useState } from 'react'
import { Get, Post } from '../../../http/http'



const sourceChoice = [
    { id: 1, name: 'Facebook' },
    { id: 2, name: 'Instagram' },
    { id: 3, name: 'Google' },
    { id: 4, name: 'Other' },
]

const CustomerCreate = () => {


    // All States Here
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
    }

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
    }


    // All Functions Here

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

    useEffect(() => {
        const getGenderTypes = () => {
            try {
                Get('api/Gender/Get')
                    .then((res) => {
                        console.log("getGenderTypes", res.data.data)
                        setAllGender(res.data.data)
                    })
            } catch (error) {

            }
        };
        getGenderTypes()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            customer_id: customerId,
            customer_type_id: +customerType,
            full_name: fullName,
            email: email,
            phone: +phone,
            gender: gender,
            image: image,
            source_id: +source,
            note: note,
        };

        console.log("data ------------->>>>>>>>>> ", data)

        try {
            Post('api/Customer/Add', data)
                .then((res) => {
                    console.log("Customer Create Response ----->>>>>", res)
                })
        } catch (error) {
            console.log("Customer Create Error ----->>>>>", error)
        }
    }


    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Customer Create Form</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <form
                                className="needs-validation"
                                novalidate
                                onSubmit={handleSubmit}
                            >
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label for="validationCustom01">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom01"
                                            required
                                            value={fullName}
                                            onChange={handleFullName}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="validationCustom02">Customer ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            required
                                            value={customerId}
                                            onChange={handleCustomerId}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="validationCustomUsername">Customer Type</label>
                                        <div className="input-group">
                                            <select
                                                className="form-control"
                                                id="validationCustom04"
                                                required
                                                value={customerType}
                                                onChange={handleCustomerType}
                                            >
                                                <option selected value="">Choose...</option>
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
                                        <label for="validationCustom03">Email</label>
                                        <input
                                            type="email"
                                            id="validationCustom03"
                                            className="form-control"
                                            required
                                            value={email}
                                            onChange={handleEmail}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="validationCustom04">Phone</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="validationCustom04"
                                            required
                                            value={phone}
                                            onChange={handlePhone}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="validationCustomUsername">Gender</label>
                                        <div className="input-group">
                                            <select
                                                className="form-control"
                                                id="validationCustom04"
                                                required
                                                value={gender}
                                                onChange={handleGender}
                                            >
                                                <option selected disabled value="">Choose...</option>
                                                {
                                                    getAllGender.map((item, index) => {
                                                        return (
                                                            <option
                                                                key={index}
                                                                value={item}
                                                            >{item}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="validationCustom04">Photo</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="validationCustom04"
                                            required
                                            onChange={(e) => handleImage(e)}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="validationCustomUsername">Source</label>
                                        <div className="input-group">
                                            <select
                                                className="form-control"
                                                id="validationCustom04"
                                                required
                                                value={source}
                                                onChange={handleSource}
                                            >
                                                <option selected disabled value="">Choose...</option>
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
                                        <label for="validationCustom04">Note</label>
                                        <textarea
                                            className="form-control"
                                            id="validationTextarea"
                                            placeholder="Any Special Note"
                                            required
                                            value={note}
                                            onChange={handleNote}
                                        ></textarea>
                                    </div>
                                </div>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCreate;