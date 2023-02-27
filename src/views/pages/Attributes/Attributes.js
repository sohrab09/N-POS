import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Post } from '../../../http/http';
import './Attributes.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Attributes = () => {

    // All States Here
    const [attributeName, setAttributeName] = useState('');
    const [inputValues, setInputValues] = useState([]);

    // All Handlers Here

    const handleAttributeName = (e) => {
        setAttributeName(e.target.value)
    };

    const handleButtonClick = () => {
        setInputValues([...inputValues, '']);
    };

    const handleInputChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
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
                            <div className="col-md-6 mb-3">
                                {/* <span className="table-add float-right mb-3 mr-2">
                                    <button
                                        className="btn btn-sm iq-bg-success"
                                        type="button"
                                        onClick={handleButtonClick}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </span> */}
                            </div>
                            <div className="col-md-6 mb-3">
                                {inputValues.map((value, index) => (
                                    <div className='mt-3'>
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
        </div>
    )
}

export default Attributes;