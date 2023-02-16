import React, { useState } from 'react'
import '../../css/custom.css';
import '../../css/responsive.css'
import '../../css/style.css'
import '../../css/typography.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';


const Elements = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        console.log(show);
        setShow(true)
    };

    return (
        <div>
            <div id="content-page" className="content-page">
                <div className="container-fluid">

                    {/* Typography */}
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Typography</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
                                    <h1>h1. Bootstrap heading</h1>
                                    <h2>h2. Bootstrap heading</h2>
                                    <h3>h3. Bootstrap heading</h3>
                                    <h4>h4. Bootstrap heading</h4>
                                    <h5>h5. Bootstrap heading</h5>
                                    <h6 className="mb-0">h6. Bootstrap heading</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Modal components</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>
                                        Launch demo modal
                                    </button>
                                    {/* <!-- Modal --> */}
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* List View */}
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">List group</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <p>The most basic list group is an unordered list with list items and the proper classNamees. Build upon it with the options that follow, or with your own CSS as needed.</p>
                                    <ul className="list-group">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Morbi leo risus</li>
                                        <li className="list-group-item">Porta ac consectetur ac</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Tabs Fill and justify</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <p>Force your <code>.nav</code>’s contents to extend the full available width one of two modifier classNamees. To proportionately fill all available space with your <code>.nav-item</code>s, use <code>.nav-fill</code>. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>
                                    <Nav fill variant="pills" defaultActiveKey="/elements">
                                        <Nav.Item className="nav-item">
                                            <Nav.Link className="nav-link" href="/elements"> Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item">
                                            <Nav.Link className="nav-link" eventKey="link-1">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item">
                                            <Nav.Link className="nav-link" eventKey="link-2">Contact</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Accordion</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="row">
                        <div class="col-sm-12 col-lg-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Form</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis
                                        mollis, diam nibh finibus leo</p>
                                    <form class="needs-validation" novalidate>
                                        <div class="form-row">
                                            <div class="col-md-6 mb-3">
                                                <label for="validationCustom01">First name</label>
                                                <input type="text" class="form-control" id="validationCustom01" required />
                                                <div class="valid-feedback">
                                                    Looks good!
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="validationCustom02">Last name</label>
                                                <input type="text" class="form-control" id="validationCustom02" required />
                                                <div class="valid-feedback">
                                                    Looks good!
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="validationCustomUsername">Username</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                    </div>
                                                    <input type="text" class="form-control" id="validationCustomUsername"
                                                        aria-describedby="inputGroupPrepend" required />
                                                    <div class="invalid-feedback">
                                                        Please choose a username.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="validationCustom03">City</label>
                                                <input type="text" class="form-control" id="validationCustom03" required />
                                                <div class="invalid-feedback">
                                                    Please provide a valid city.
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="validationCustom04">State</label>
                                                <select class="form-control" id="validationCustom04" required>
                                                    <option selected disabled value="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Please select a valid state.
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="validationCustom05">Zip</label>
                                                <input type="text" class="form-control" id="validationCustom05" required />
                                                <div class="invalid-feedback">
                                                    Please provide a valid zip.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                                <label class="form-check-label" for="invalidCheck">
                                                    Agree to terms and conditions
                                                </label>
                                                <div class="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" type="submit">Submit form</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Table</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <Table striped>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td colSpan={2}>Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Elements