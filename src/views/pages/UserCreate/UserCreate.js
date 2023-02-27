import React, { useEffect, useState } from 'react'
import { Get, Post } from '../../../http/http'


// const stores = [
//     { id: 1, name: 'Mohakhali' },
//     { id: 2, name: 'Banani' },
//     { id: 3, name: 'Gulshan' },
//     { id: 4, name: 'Mohammadpur' },
// ]


const UserCreate = () => {

    // All States Here
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [stores, setStores] = useState([])
    const [store, setStore] = useState('')
    // const [image, setImage] = useState('')


    // All Handlers Here
    const handleFullName = (e) => {
        setFullName(e.target.value)
    };

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleStore = (e) => {
        setStore(e.target.value)
    };

    // const handleImage = async (e) => {
    //     const file = e.target.files[0]
    //     const base64 = await convertBase64(file)
    //     setImage(base64)
    // }

    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         }
    //     })
    // }


    // All Functions Here

    useEffect(() => {
        const getStores = async () => {
            await Get('api/Store/GetAll')
                .then(res => {
                    // console.log("Response: ", res.data.data)
                    if (res.data.statusCode === 200) {
                        setStores(res.data.data)
                    }
                })
        }
        getStores()
    }, [])

    // After Submit Clear All Fields
    const clearInputs = () => {
        setFullName('')
        setUserName('')
        setEmail('')
        setPhone('')
        setPassword('')
        setConfirmPassword('')
        setStore('')
    }

    // Create User
    const createUser = async () => {
        const data = {
            fullName: fullName,
            phoneNo: phone,
            email: email,
            UserName: userName,
            password: password,
            confirmPassword: confirmPassword,
            storeId: +store
        }
        console.log("Data ------------>>>>>>> ", data)

        try {
            await Post('api/Account/Register', data)
                .then(res => {
                    // console.log("Response ------------>>>>>  ", res)
                    if (res.data.statusCode === 200) {
                        clearInputs()
                        alert(res.data.message)
                    }
                })
        } catch (error) {
            console.log("Error ------------>>>>>>> ", error)
            alert(error.response.data.message)
        }
    }


    return (
        <div className="container-fluid p-0 m-0">
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">User Create Form</h4>
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
                                <label htmlFor="userName">User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userName"
                                    value={userName}
                                    onChange={handleUserName}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
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
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleConfirmPassword}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="store">Store</label>
                                <div className="input-group">
                                    <select
                                        className="form-control"
                                        id="store"
                                        value={store}
                                        onChange={handleStore}
                                    >
                                        <option>Choose...</option>
                                        {
                                            stores.map((item, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.id_store}
                                                        onChange={handleStore}
                                                    >{item.store_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            {/* <div className="col-md-6 mb-3">
                                    <label htmlFor="photo">Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="photo"
                                        onChange={(e) => handleImage(e)}
                                    />
                                </div> */}
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={createUser}
                        >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCreate;