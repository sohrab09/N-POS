import React, { useEffect, useState } from 'react'
import { Get, Post } from '../../../http/http';

const CategoryEntryForm = () => {

    // All States Here
    const [categoryName, setCategoryName] = useState('');
    const [getParentCategoryId, setGetParentCategoryId] = useState([]);
    const [parentCategoryId, setParentCategoryId] = useState('');


    // All Handlers Here

    const handleCategoryName = (e) => {
        setCategoryName(e.target.value)
    };

    const handleParentCategoryId = (e) => {
        setParentCategoryId(e.target.value)
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
                        console.log("res getParentCategory--------->>>>>>>> ", res.data.data)
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
                    console.log("res --------->>>>>>>> ", res)
                    if (res.data.statusCode === 200) {
                        clearInputs()
                        alert(res.data.message)
                    }
                })
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    };


    return (
        <div className="container-fluid p-0 m-0">
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
        </div>
    )
}

export default CategoryEntryForm