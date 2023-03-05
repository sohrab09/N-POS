import React, { useState, useEffect, useRef } from 'react'
import { Get } from '../../../http/http';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import { MultiSelect } from "react-multi-select-component";




const PurchaseOrder = () => {

    // All States Here
    const [loading, setLoading] = useState(false);
    const [getAllStore, setGetAllStore] = useState([]);
    const [storeId, setStoreId] = useState('');
    // const [date, setDate] = useState(new Date());
    const [getAllSupplier, setAllSupplier] = useState([]);
    const [supplierId, setSupplierId] = useState('');
    const [getAllProduct, setAllProduct] = useState([]);
    const [products, setProducts] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef();
    const [getAllAttributes, setAllAttributes] = useState([]);
    const [selectAttributes, setSelectAttributes] = useState([]);

    // console.log("selectAttributes", selectAttributes);

    const [selectedItem, setSelectedItem] = useState([]);

    // console.log("Selected ITems ----------->>>>>>>>>>>> ", selectedItem)

    const [inputValues, setInputValues] = useState([]);

    // Modal State
    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleInputChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
    };

    // All Handlers Here
    const handleStoreId = (e) => {
        setStoreId(e.target.value);
    };

    // const handleDate = (e) => {
    //     setDate(e.target.value);
    // };

    const handleSupplierId = (e) => {
        setSupplierId(e.target.value);
    };





    // All Functions Here

    useEffect(() => {
        getAllStores();
        getAllSuppliers();
        getAllProducts();
        getAllAttribute();
    }, [])

    // All Store
    const getAllStores = async () => {
        setLoading(true);
        try {
            Get('api/Store/GetAll')
                .then((res) => {
                    // console.log("getAllStores", res)
                    if (res.data.statusCode === 200) {
                        setLoading(false);
                        setGetAllStore(res.data.data);
                    }
                })
        } catch (error) {
            console.log("Get All Store Error ----->>>>> ", error);
        } finally {
            setLoading(false);
        }
    };

    // All Supplier
    const getAllSuppliers = async () => {
        setLoading(true);
        try {
            Get('api/Supplier/GetAll')
                .then((res) => {
                    // console.log("getAllSuppliers", res)
                    if (res.data.statusCode === 200) {
                        setLoading(false);
                        setAllSupplier(res.data.data);
                    }
                })
        } catch (error) {
            console.log("Get All Supplier Error ----->>>>> ", error);
        } finally {
            setLoading(false);
        }
    };

    // All Product
    const getAllProducts = async () => {
        setLoading(true);
        try {
            Get('api/Product/GetAll')
                .then((res) => {
                    // console.log("Get AllProducts ----->>>>> ", res)
                    if (res.data.statusCode === 200) {
                        setLoading(false);
                        setAllProduct(res.data.data);
                    }
                })
        } catch (error) {
            console.log("Get All Product Error ----->>>>> ", error);
        } finally {
            setLoading(false);
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
                        setAllAttributes(res.data.data)
                        setLoading(false);
                    }
                })
        } catch (error) {
            setLoading(false);
            console.log("Get All Attributes Error ----->>>>>", error)
        }
    };


    // All Methods Here

    const selectedItemAdd = () => {
        const newItem = {
            products: products,
            attributes: selectAttributes
        }

        console.log("newItem ----->>>>> ", newItem)

        setSelectedItem([...selectedItem, newItem]);
        setProducts("");
        setSelectAttributes([]);
    };

    const selectedItemRemove = (index) => {
        const newItems = selectedItem.filter((item, i) => i !== index);
        setSelectedItem(newItems);
    };


    // Add Modal and Edit Modal Function
    const handleShowAddModal = () => {
        setCsAddModal(!csAddModal);
        setShowAddModal(true);
    };


    return (
        <>
            {/* Product Select Box */}

            <div className="container-fluid p-0 m-0">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Purchase Order</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="needs-validation">
                            <div className="form-row d-flex justify-content-between">
                                <div className="col-md-4 mb-3">
                                    {/* <label htmlFor="productName">Product Name : *</label> */}
                                    <input
                                        type="text"
                                        placeholder='Product Name'
                                        // id="productName"
                                        className="form-control"
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => {
                                            if (!isHovered) {
                                                setIsFocus(false);
                                            }
                                        }}
                                        value={products}
                                        onChange={(e) => {
                                            setProducts(e.target.value);
                                        }}
                                        ref={inputRef}
                                    />
                                    <div style={{ cursor: 'pointer' }}>
                                        {isFocus && (
                                            <div
                                                onMouseEnter={() => {
                                                    setIsHovered(true);
                                                }}
                                                onMouseLeave={() => {
                                                    setIsHovered(false);
                                                }}
                                            >
                                                {getAllProduct.map((product, index) => {
                                                    const isMatch = product.productName.toLowerCase().includes(products.toLowerCase());
                                                    return (
                                                        <div key={index}>
                                                            {
                                                                products.length > 0 && isMatch && (
                                                                    <div onClick={() => {
                                                                        setProducts(product.productName);
                                                                        if (setProducts(product.productName) === product.productName) {
                                                                            setIsFocus(true);
                                                                        } else {
                                                                            setIsFocus(false);
                                                                        }
                                                                    }}
                                                                    >
                                                                        {product.productName}
                                                                    </div>
                                                                )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-4">
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
                                            {/* <label htmlFor="attribute">Attribute</label>
                                            <MultiSelect
                                                options={getAllAttributes && getAllAttributes.map((attribute) => {
                                                    console.log("attribute ----->>>>> ", attribute)
                                                    return {
                                                        label: attribute.attributeName,
                                                        value: attribute.id
                                                    }
                                                })}
                                                value={selectAttributes}
                                                onChange={setSelectAttributes}
                                            /> */}
                                            <div className="form-group">
                                                <label htmlFor="attribute">Attribute</label>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Attribute Name</th>
                                                            <th>Attribute Value</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            getAllAttributes && getAllAttributes.map((attribute, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{attribute.attributeName}</td>
                                                                        <td>
                                                                            <ul>
                                                                                {
                                                                                    attribute.attributeDetails?.map((item, index) => {
                                                                                        return (
                                                                                            <div className='d-flex' key={index}>
                                                                                                <li className='mr-2'>
                                                                                                    <input
                                                                                                        type="checkbox"
                                                                                                        value={item.id && item.attributeName}
                                                                                                        onChange={(e) => {
                                                                                                            // Multiple Attribute Value Select
                                                                                                            if (e.target.checked) {
                                                                                                                setSelectAttributes([...selectAttributes, e.target.value])
                                                                                                            } else {
                                                                                                                setSelectAttributes(selectAttributes.filter((item) => item !== e.target.value))
                                                                                                            }
                                                                                                        }}
                                                                                                    />
                                                                                                </li>
                                                                                                <li value={item.id && item.attributeName}>{item.attributeName}</li>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                        </Modal.Body>
                                    </Modal>


                                </div>

                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={selectedItemAdd}
                            >Add Item</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Purchase Order Table */}
            <div>
                {
                    loading === true ?
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <div className="container-fluid p-0 m-0">
                            <div className="iq-card">
                                <div className="iq-card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Buying Price</th>
                                                    <th scope="col">Selling Price</th>
                                                    <th scope="col">Attribute</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    selectedItem.map((item, index) => {
                                                        return (
                                                            <tr key={index} >
                                                                <td>{item.products}</td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        id="quantity"
                                                                        placeholder='Quantity'
                                                                        className="form-control"
                                                                        onChange={(event) => handleInputChange(index, event)}
                                                                        value={selectedItem[index].quantity}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        id="buyingPrice"
                                                                        placeholder='Buying Price'
                                                                        className="form-control"
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        id="sellingPrice"
                                                                        placeholder='Selling Price'
                                                                        className="form-control"
                                                                    />
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item.attributes.map((attribute, index) => {
                                                                            return (
                                                                                <span key={index}>
                                                                                    <ul>
                                                                                        <li>{attribute}</li>
                                                                                    </ul>
                                                                                </span>
                                                                            )
                                                                        })
                                                                    }
                                                                </td>
                                                                <td>200</td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-danger"
                                                                        onClick={() => selectedItemRemove(index)}
                                                                    >Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </div>


            {/* Supplier and Store Select Box */}
            <div className="container-fluid p-0 m-0">
                <div className="iq-card">
                    <div className="iq-card-body">
                        <div className="needs-validation">
                            <div className="form-row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="storeName">Store Name : *</label>
                                    <div className="input-group">
                                        <select
                                            className="form-control"
                                            id="storeName"
                                            onChange={handleStoreId}
                                            value={storeId}
                                        >
                                            <option value="">Choose...</option>
                                            {
                                                getAllStore.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item.id_store}>{item.store_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label htmlFor="date">Date : *</label>
                                    <input
                                        type="date"
                                        id="date"
                                        className='form-control'
                                    // value={date}
                                    // onChange={handleDate}
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label htmlFor="supplierName">Supplier Name : *</label>
                                    <div className="input-group">
                                        <select
                                            className="form-control"
                                            id="supplierName"
                                            onChange={handleSupplierId}
                                            value={supplierId}
                                        >
                                            <option value="">Choose...</option>
                                            {
                                                getAllSupplier.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item.id}>{item.fullName}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label htmlFor="Notes">Notes</label>
                                    <textarea
                                        className="form-control"
                                        id="Notes"
                                        placeholder="Any Special Note"
                                    ></textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchaseOrder