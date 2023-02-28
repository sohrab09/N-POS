import React, { useEffect, useState } from 'react'
import { Get, Post, Put } from '../../../http/http';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const ProductEntryForm = () => {

    // All States Here
    const [loading, setLoading] = useState(false);
    const [productName, setProductName] = useState('');
    const [productCode, setProductCode] = useState('');
    const [getAllCategory, setGetAllCategory] = useState([]);
    const [getByParentCategoryId, setGetByParentCategoryId] = useState([]);
    const [productCategory, setProductCategory] = useState('');
    const [productSubCategory, setProductSubCategory] = useState('');
    const [getAllBrand, setGetAllBrand] = useState([]);
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [vat, setVat] = useState(false);
    const [vatPercent, setVatPercent] = useState('');
    const [getAllUnit, setGetAllUnit] = useState([]);
    const [unit, setUnit] = useState('');
    const [minimumStock, setMinimumStock] = useState('');
    const [maximumStock, setMaximumStock] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [salesPrice, setSalesPrice] = useState('');
    const [description, setDescription] = useState('');

    // Get All Product Information
    const [getAllProduct, setGetAllProduct] = useState([]);

    // Modal State
    const [csAddModal, setCsAddModal] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [csEditModal, setCsEditModal] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);

    // Edit Product Information
    const [editProductID, setEditProductID] = useState('');
    const [editProductName, setEditProductName] = useState('');
    const [editProductCode, setEditProductCode] = useState('');
    const [editProductCategory, setEditProductCategory] = useState('');
    const [editProductSubCategory, setEditProductSubCategory] = useState('');
    const [editType, setEditType] = useState('');
    const [editBrand, setEditBrand] = useState('');
    const [editVat, setEditVat] = useState(false);
    const [editVatPercent, setEditVatPercent] = useState('');
    const [editUnit, setEditUnit] = useState('');
    const [editMinimumStock, setEditMinimumStock] = useState('');
    const [editMaximumStock, setEditMaximumStock] = useState('');
    const [editPurchasePrice, setEditPurchasePrice] = useState('');
    const [editSalesPrice, setEditSalesPrice] = useState('');
    const [editDescription, setEditDescription] = useState('');


    // All Handlers Here

    const handleProductName = (e) => { setProductName(e.target.value) };

    const handleProductCode = (e) => { setProductCode(e.target.value) };

    const handleProductCategory = (e) => { setProductCategory(e.target.value) };

    const handleProductSubCategory = (e) => { setProductSubCategory(e.target.value) };

    const handleType = (e) => { setType(e.target.value) };

    const handleBrand = (e) => { setBrand(e.target.value) };

    const handleVat = (e) => { setVat(e.target.checked) };

    const handleVatPercent = (e) => { setVatPercent(e.target.value) };

    const handleUnit = (e) => { setUnit(e.target.value) };

    const handleMinimumStock = (e) => { setMinimumStock(e.target.value) };

    const handleMaximumStock = (e) => { setMaximumStock(e.target.value) };

    const handlePurchasePrice = (e) => { setPurchasePrice(e.target.value) };

    const handleSalesPrice = (e) => { setSalesPrice(e.target.value) };

    const handleDescription = (e) => { setDescription(e.target.value) };

    // Edit Product Information Handler

    const handleEditProductName = (e) => { setEditProductName(e.target.value) };

    const handleEditProductCode = (e) => { setEditProductCode(e.target.value) };

    const handleEditProductCategory = (e) => { setEditProductCategory(e.target.value) };

    const handleEditProductSubCategory = (e) => { setEditProductSubCategory(e.target.value) };

    const handleEditType = (e) => { setEditType(e.target.value) };

    const handleEditBrand = (e) => { setEditBrand(e.target.value) };

    const handleEditVat = (e) => { setEditVat(e.target.checked) };

    const handleEditVatPercent = (e) => { setEditVatPercent(e.target.value) };

    const handleEditUnit = (e) => { setEditUnit(e.target.value) };

    const handleEditMinimumStock = (e) => { setEditMinimumStock(e.target.value) };

    const handleEditMaximumStock = (e) => { setEditMaximumStock(e.target.value) };

    const handleEditPurchasePrice = (e) => { setEditPurchasePrice(e.target.value) };

    const handleEditSalesPrice = (e) => { setEditSalesPrice(e.target.value) };

    const handleEditDescription = (e) => { setEditDescription(e.target.value) };

    // All Functions Here
    useEffect(() => {
        const getAllCategory = async () => {
            try {
                Get('api/Category/GetAll')
                    .then(res => {
                        // console.log("res getAllCategory--------->>>>>>>> ", res.data.data)
                        if (res.data.statusCode === 200) {
                            setGetAllCategory(res.data.data)
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        }
        getAllCategory()
    }, [])

    useEffect(() => {
        if (productCategory || editProductCategory) {
            const getByParentCategoryId = async () => {
                try {
                    Get(`api/Category/GetByParentCategory?parentId=${productCategory || editProductCategory}`)
                        .then(res => {
                            // console.log("res getByParentCategoryId--------->>>>>>>> ", res.data.data)
                            if (res.data.statusCode === 200) {
                                setGetByParentCategoryId(res.data.data)
                            }
                        })
                } catch (error) {
                    console.log(error)
                }
            }
            getByParentCategoryId()
        }
    }, [productCategory, editProductCategory])

    useEffect(() => {
        const getAllUnit = async () => {
            try {
                Get('api/Unit/GetAll')
                    .then(res => {
                        // console.log("res getAllUnit--------->>>>>>>> ", res.data.data)
                        if (res.data.statusCode === 200) {
                            setGetAllUnit(res.data.data)
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        }
        getAllUnit()
    }, [])

    useEffect(() => {
        const getAllBrand = async () => {
            try {
                Get('api/Brand/GetAll')
                    .then(res => {
                        // console.log("res getAllBrand--------->>>>>>>> ", res.data.data)
                        if (res.data.statusCode === 200) {
                            setGetAllBrand(res.data.data)
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        }
        getAllBrand()
    }, [])


    // Clear All States Here
    const clearAllStates = () => {
        setProductName('');
        setProductCode('');
        setProductCategory('');
        setProductSubCategory('');
        setType('');
        setBrand('');
        setVat(false);
        setVatPercent('');
        setUnit('');
        setMinimumStock('');
        setMaximumStock('');
        setPurchasePrice('');
        setSalesPrice('');
        setDescription('');
    };

    // Create Product Information
    const createProductInformation = async () => {
        const data = {
            productCode: productCode,
            categoryId: +productCategory,
            subCategoryId: productSubCategory ? +productSubCategory : null,
            productName: productName,
            description: description ? description : null,
            type: +type,
            brandId: brand ? +brand : null,
            isVatable: vat ? 1 : 2,
            vat: +vatPercent,
            unitId: +unit,
            buyingPrice: +purchasePrice,
            sellingPrice: +salesPrice,
            minStock: minimumStock ? +minimumStock : null,
            maxStock: minimumStock ? +maximumStock : null,
            image: null,
        }

        console.log("data --------->>>>>>>> ", data)

        try {
            Post('api/Product/Add', data)
                .then(res => {
                    // console.log("res createProductInformation--------->>>>>>>> ", res.data.data)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message)
                        clearAllStates();
                        getAllProductInformation();
                        setShowAddModal(false);
                    }
                })
        } catch (error) {
            console.log("Product Entry Error ------>>>>> ", error)
            alert(error.response.data.message)
        }
    };

    // Get All Product Information

    useEffect(() => {
        getAllProductInformation();
    }, []);

    const getAllProductInformation = async () => {
        setLoading(true);
        try {
            Get('api/Product/GetAll')
                .then(res => {
                    // console.log("res getAllProductInformation--------->>>>>>>> ", res.data.data)
                    if (res.data.statusCode === 200) {
                        setGetAllProduct(res.data.data)
                        setLoading(false);
                    }
                });
        } catch (error) {
            setLoading(false);
            console.log("Get Product Entry Error ------>>>>> ", error)
        }
    };

    // Add Modal and Edit Modal Function
    const handleShowAddModal = () => {
        setCsAddModal(!csAddModal);
        setShowAddModal(true);
    };

    // Show Edit Modal
    const handleShowEditModal = (product) => {
        console.log("product --------->>>>>>>> ", product)
        setCsEditModal(!csEditModal);
        setShowEditModal(true);

        // Set Edit Product Information
        setEditProductID(product.id);
        setEditProductName(product.productName);
        setEditProductCode(product.productCode);
        setEditProductCategory(product.categoryId);
        setEditProductSubCategory(product.subCategoryId);
        setEditType(product.type === 1 ? "1" : "2");
        setEditBrand(product.brandId);
        setEditVat(product.isVatable === 1 ? true : false);
        setEditVatPercent(product.vat);
        setEditUnit(product.unitId);
        setEditMinimumStock(product.minStock);
        setEditMaximumStock(product.maxStock);
        setEditPurchasePrice(product.buyingPrice);
        setEditSalesPrice(product.sellingPrice);
        setEditDescription(product.description);
    };

    // Edit Product Information
    const editProductInformation = async () => {
        const data = {
            id: editProductID,
            productCode: editProductCode,
            categoryId: +editProductCategory,
            subCategoryId: editProductSubCategory ? +editProductSubCategory : null,
            productName: editProductName,
            description: editDescription ? editDescription : null,
            type: +editType,
            brandId: editBrand ? +editBrand : null,
            isVatable: editVat ? 1 : 2,
            vat: +editVatPercent,
            unitId: +editUnit,
            buyingPrice: +editPurchasePrice,
            sellingPrice: +editSalesPrice,
            minStock: editMinimumStock ? +editMinimumStock : null,
            maxStock: editMinimumStock ? +editMaximumStock : null,
            image: null,
        }

        // console.log("data --------->>>>>>>> ", data)

        try {
            Put('api/Product/Edit', data)
                .then(res => {
                    // console.log("res editProductInformation--------->>>>>>>> ", res.data.data)
                    if (res.data.statusCode === 200) {
                        alert(res.data.message)
                        clearAllStates();
                        getAllProductInformation();
                        setShowEditModal(false);
                    }
                })
        } catch (error) {
            console.log("Product Entry Error ------>>>>> ", error)
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
                            <Modal.Title>Edit Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Product Entry Form</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="needs-validation">
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="productName">Product Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="productName"
                                                    value={editProductName}
                                                    onChange={handleEditProductName}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="productCode">Product Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="productCode"
                                                    value={editProductCode}
                                                    onChange={handleEditProductCode}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="category">Category</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="category"
                                                        value={editProductCategory}
                                                        onChange={handleEditProductCategory}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {
                                                            getAllCategory.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="subCategory">Sub Category</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="subCategory"
                                                        value={editProductSubCategory}
                                                        onChange={handleEditProductSubCategory}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {
                                                            getByParentCategoryId.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="brand">Brand</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="brand"
                                                        value={editBrand}
                                                        onChange={handleEditBrand}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {
                                                            getAllBrand.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.brandName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3 d-flex justify-content-around align-items-center">
                                                <div className="col-md-6 mb-3">
                                                    <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                                        <input
                                                            type="radio"
                                                            id="1"
                                                            name="type"
                                                            className="custom-control-input bg-primary"
                                                            value="1"
                                                            checked={editType === "1"}
                                                            onChange={handleEditType}
                                                        />
                                                        <label className="custom-control-label" htmlFor="1"> Product </label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                                        <input
                                                            type="radio"
                                                            id="2"
                                                            name="type"
                                                            className="custom-control-input bg-success"
                                                            value="2"
                                                            checked={editType === "2"}
                                                            onChange={handleEditType}
                                                        />
                                                        <label className="custom-control-label" htmlFor="2"> Service </label>
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck5"
                                                        checked={editVat}
                                                        onChange={handleEditVat}
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck5">VAT</label>
                                                </div>
                                            </div>
                                            {
                                                editVat === true ?
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="vat">VAT (%) </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="vat"
                                                            value={editVatPercent}
                                                            onChange={handleEditVatPercent}
                                                        />
                                                    </div> : null
                                            }
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="unit">Unit</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="unit"
                                                        value={editUnit}
                                                        onChange={handleEditUnit}
                                                    >
                                                        <option disabled value="">Choose...</option>
                                                        {
                                                            getAllUnit.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.unitName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="minimumStock">Minimum Stock </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="minimumStock"
                                                    value={editMinimumStock}
                                                    onChange={handleEditMinimumStock}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="maximumStock">Maximum Stock</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="maximumStock"
                                                    value={editMaximumStock}
                                                    onChange={handleEditMaximumStock}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="purchasePrice">Purchase Price</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="purchasePrice"
                                                    value={editPurchasePrice}
                                                    onChange={handleEditPurchasePrice}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="salesPrice">Sales Price</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="salesPrice"
                                                    value={editSalesPrice}
                                                    onChange={handleEditSalesPrice}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="productImage">Product Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="productImage"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="description">Description</label>
                                                <textarea
                                                    className="form-control"
                                                    id="description"
                                                    placeholder="Product Description"
                                                    value={editDescription}
                                                    onChange={handleEditDescription}
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={editProductInformation}
                                        >Update</button>
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
                        Add Product
                    </Button>
                    <Modal
                        show={showAddModal}
                        onHide={() => setShowAddModal(false)}
                        size="lg"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Product Entry Form</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="needs-validation">
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="productName">Product Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="productName"
                                                    value={productName}
                                                    onChange={handleProductName}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="productCode">Product Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="productCode"
                                                    value={productCode}
                                                    onChange={handleProductCode}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="category">Category</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="category"
                                                        value={productCategory}
                                                        onChange={handleProductCategory}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {
                                                            getAllCategory.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="subCategory">Sub Category</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="subCategory"
                                                        value={productSubCategory}
                                                        onChange={handleProductSubCategory}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {
                                                            getByParentCategoryId.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="brand">Brand</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="brand"
                                                        value={brand}
                                                        onChange={handleBrand}
                                                    >
                                                        <option disabled value="">Choose...</option>
                                                        {
                                                            getAllBrand.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.brandName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3 d-flex justify-content-around align-items-center">
                                                <div className="col-md-6 mb-3">
                                                    <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                                        <input
                                                            type="radio"
                                                            id="1"
                                                            name="type"
                                                            className="custom-control-input bg-primary"
                                                            value="1"
                                                            onChange={handleType}
                                                            checked={type === '1'}
                                                        />
                                                        <label className="custom-control-label" htmlFor="1"> Product </label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                                        <input
                                                            type="radio"
                                                            id="2"
                                                            name="type"
                                                            className="custom-control-input bg-success"
                                                            value="2"
                                                            onChange={handleType}
                                                            checked={type === '2'}
                                                        />
                                                        <label className="custom-control-label" htmlFor="2"> Service </label>
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck5"
                                                        checked={vat}
                                                        onChange={handleVat}
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck5">VAT</label>
                                                </div>
                                            </div>
                                            {
                                                vat === true ?
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="vat">VAT (%) </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="vat"
                                                            value={vatPercent}
                                                            onChange={handleVatPercent}
                                                        />
                                                    </div> : null
                                            }
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="unit">Unit</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        id="unit"
                                                        value={unit}
                                                        onChange={handleUnit}
                                                    >
                                                        <option disabled value="">Choose...</option>
                                                        {
                                                            getAllUnit.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>{item.unitName}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="minimumStock">Minimum Stock </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="minimumStock"
                                                    value={minimumStock}
                                                    onChange={handleMinimumStock}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="maximumStock">Maximum Stock</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="maximumStock"
                                                    value={maximumStock}
                                                    onChange={handleMaximumStock}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="purchasePrice">Purchase Price</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="purchasePrice"
                                                    value={purchasePrice}
                                                    onChange={handlePurchasePrice}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="salesPrice">Sales Price</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="salesPrice"
                                                    value={salesPrice}
                                                    onChange={handleSalesPrice}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="productImage">Product Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="productImage"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="description">Description</label>
                                                <textarea
                                                    className="form-control"
                                                    id="description"
                                                    placeholder="Product Description"
                                                    value={description}
                                                    onChange={handleDescription}
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={createProductInformation}
                                        >Submit</button>
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
                                <th>Product Code</th>
                                <th>Product Name</th>
                                <th>Sales Price</th>
                                <th>Purchase Price</th>
                                <th>Minimum Stock</th>
                                <th>Maximum Stock</th>
                                <th>VAT</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getAllProduct?.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.productCode}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.sellingPrice}</td>
                                        <td>{product.buyingPrice}</td>
                                        <td>{product.minStock}</td>
                                        <td>{product.maxStock}</td>
                                        <td>{product.vat} %</td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleShowEditModal(product)}
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

export default ProductEntryForm