import React, { useState, useEffect, useRef } from 'react'
import { Get } from '../../../http/http';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PurchaseOrder = () => {

    // All States Here
    const [loading, setLoading] = useState(false);
    const [getAllProduct, setAllProduct] = useState([]);
    const [products, setProducts] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef();
    const [getAllAttributes, setAllAttributes] = useState([]);
    const [selectedAttributes, setSelectedAttributes] = useState([]);

    console.log("selectedAttributes ----->>>> ", selectedAttributes);

    // Modal State
    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);

    // All Functions Here

    useEffect(() => {
        getAllProducts();
        getAllAttribute();
    }, [])


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
                    // console.log("res getAllAttribute -------->>>>>>>> ", res.data.data)
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

    // Add Modal
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
                                    <input
                                        type="text"
                                        placeholder='Product Name'
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
                                    <div className='position-absolute w-100 bg-light  pl-3 p-1' style={{ cursor: 'pointer' }}>
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
                                                        <div key={index} className=''>
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
                                        Select Attribute
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
                                            <div className="form-group">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Attribute Name</th>
                                                            <th>Attribute Value</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            getAllAttributes.map((attribute, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{attribute.attributeName}</td>
                                                                        <td>
                                                                            <ul>
                                                                                {
                                                                                    attribute.attributeDetails?.map((item, index) => {
                                                                                        //console.log("item", item)
                                                                                        return (
                                                                                            <div className='d-flex' key={index}>
                                                                                                <li className='mr-2'>
                                                                                                    <input type="checkbox"
                                                                                                        value={item.id && item.attributeId} // id for item and attributeId for parent
                                                                                                        onChange={(e) => {
                                                                                                            setSelectedAttributes([...selectedAttributes,
                                                                                                            {
                                                                                                                id: item.attributeId,
                                                                                                                attributeName: attribute.attributeName,
                                                                                                                attributeDetails: [
                                                                                                                    {
                                                                                                                        id: item.id,
                                                                                                                        attributeId: item.attributeId,
                                                                                                                        attributeName: item.attributeName
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                            ]);
                                                                                                        }}
                                                                                                    />
                                                                                                </li>
                                                                                                <li>{item.attributeName}</li>
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
                                                    <th scope="col">S/N</th>
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

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default PurchaseOrder

