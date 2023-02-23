import React, { useState } from 'react'


const stores = [
    { id: 1, name: 'Mohakhali' },
    { id: 2, name: 'Banani' },
    { id: 3, name: 'Gulshan' },
    { id: 4, name: 'Mohammadpur' },
]



const UserCreate = () => {

    // All States Here
    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState('')
    console.log("Image ------------->>>>> ", image)
    const [store, setStore] = useState('')


    // All Handlers Here
    const handleFullName = (e) => {
        setFullName(e.target.value)
    };

    const handleStore = (e) => {
        setStore(e.target.value)
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




    return (
        <div className="row">
            <div className="col-sm-12 col-lg-12">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">User Create Form</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <form
                            className="needs-validation"
                            novalidate
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
                                    <label for="validationCustom02">User Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom02"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom03">Email</label>
                                    <input
                                        type="email"
                                        id="validationCustom03"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Phone</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom04">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="validationCustom04"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustomUsername">Store</label>
                                    <div className="input-group">
                                        <select
                                            className="form-control"
                                            id="validationCustom04"
                                            required
                                            value={store}
                                            onChange={handleStore}
                                        >
                                            <option selected disabled value="">Choose...</option>
                                            {
                                                stores.map((item, index) => {
                                                    return (
                                                        <option
                                                            key={index}
                                                            value={item.id}
                                                            onChange={handleStore}
                                                        >{item.name}</option>
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
                            </div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCreate;