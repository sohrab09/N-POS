import { faProductHunt } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../../images/logo.png'


const AppSidebar = () => {
  return (
    <div className="iq-sidebar">
      {/* Logo and Name */}
      <div className="iq-sidebar-logo d-flex justify-content-between">
        <a href="/">
          <div className="iq-light-logo">
            <div className="iq-light-logo">
              <img src={logo} className="img-fluid" alt="" />
            </div>
          </div>
          <span style={{ textTransform: 'capitalize' }}>N POS</span>
        </a>
        <div className="iq-menu-bt-sidebar">
          <div className="iq-menu-bt align-self-center">
            <div className="wrapper-menu">
              <div className="main-circle"><FontAwesomeIcon icon={faUser} /></div>
              <div className="hover-circle"><FontAwesomeIcon icon={faUser} /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div id="sidebar-scrollbar">
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">

            {/* Users Management */}
            <li className="">
              <a href="/" className="iq-waves-effect collapsed" data-toggle="collapse"
                aria-expanded="false"><FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} /> <span>Users Management</span>
                <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5px' }} /></a>
              <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                <li><a href="/"><i className="ri-git-commit-line"></i>Users</a></li>
                <li><a href="/"><i className="ri-text-spacing"></i>Customers</a></li>
                <li><a href="/"><i className="ri-indent-decrease"></i>Suppliers</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Customer Type</a></li>
              </ul>
            </li>

            {/* Products Management */}
            <li className="">
              <a href="#menu-design" className="iq-waves-effect collapsed" data-toggle="collapse"
                aria-expanded="false"><FontAwesomeIcon icon={faProductHunt} style={{ marginRight: '5px' }} /><span>Products Management</span>
                <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5px' }} /></a>
              <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                <li><a href="/"><i className="ri-git-commit-line"></i>Products</a></li>
                <li><a href="/"><i className="ri-text-spacing"></i>Categories</a></li>
                <li><a href="/"><i className="ri-indent-decrease"></i>Brands</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Units</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Attributes</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Barcode</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Pricing</a></li>
              </ul>
            </li>

            {/* Purchase Management */}
            <li className="">
              <a href="#menu-design" className="iq-waves-effect collapsed" data-toggle="collapse"
                aria-expanded="false"><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '5px' }} /><span>Purchase Management</span>
                <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5px' }} /></a>
              <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                <li><a href="/"><i className="ri-git-commit-line"></i>Purchase Order</a></li>
                <li><a href="/"><i className="ri-text-spacing"></i>Purchase Receive</a></li>
                <li><a href="/"><i className="ri-indent-decrease"></i>Purchase Return</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Purchase Requisition</a></li>
              </ul>
            </li>

            {/* Stock Management */}
            <li className="">
              <a href="#menu-design" className="iq-waves-effect collapsed" data-toggle="collapse"
                aria-expanded="false"><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '5px' }} /><span>Stock Management</span>
                <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5px' }} /></a>
              <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                <li><a href="/"><i className="ri-git-commit-line"></i>Stock Adjustment</a></li>
                <li><a href="/"><i className="ri-text-spacing"></i>Stock Transfer</a></li>
                <li><a href="/"><i className="ri-indent-decrease"></i>Stock Audit</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Stock Settings</a></li>
              </ul>
            </li>

            {/* Accounts Management */}
            <li className="">
              <a href="#menu-design" className="iq-waves-effect collapsed" data-toggle="collapse"
                aria-expanded="false"><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '5px' }} /><span>Accounts Management</span>
                <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5px' }} /></a>
              <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                <li><a href="/"><i className="ri-git-commit-line"></i>Transaction</a></li>
                <li><a href="/"><i className="ri-text-spacing"></i>Fund Transfer</a></li>
                <li><a href="/"><i className="ri-indent-decrease"></i>Account</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Accounts Config</a></li>
              </ul>
            </li>

            {/* Promotion Management */}
            <li>
              <a href="todo.html" class="iq-waves-effect" aria-expanded="false"><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '5px' }} /><span>Promotion Management</span></a>
            </li>

            {/* Sales Management */}
            <li className="">
              <a href="#menu-design" className="iq-waves-effect collapsed" data-toggle="collapse"
                aria-expanded="false"><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '5px' }} /><span>Sales Management</span>
                <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5px' }} /></a>
              <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                <li><a href="/"><i className="ri-git-commit-line"></i>Sales</a></li>
                <li><a href="/"><i className="ri-text-spacing"></i>Sale Returns</a></li>
                <li><a href="/"><i className="ri-indent-decrease"></i>Print Challan</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Quotation</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Sales Person</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Sales Commission</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Order</a></li>
              </ul>
            </li>

            {/* Delivery Management */}
            <li className="">
              <a href="#menu-design" className="iq-waves-effect collapsed" data-toggle="collapse"
                aria-expanded="false"><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '5px' }} /><span>Delivery Management</span>
                <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5px' }} /></a>
              <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                <li><a href="/"><i className="ri-git-commit-line"></i>Agents</a></li>
                <li><a href="/"><i className="ri-text-spacing"></i>Delivery Person</a></li>
                <li><a href="/"><i className="ri-indent-decrease"></i>Delivery Cost</a></li>
                <li><a href="/"><i className="ri-line-height"></i>Delivery Orders</a></li>
                <li><a href="/"><i className="ri-line-height"></i>COD Charge</a></li>
              </ul>
            </li>

            {/* Settings */}
            <li className="">
              <a href="#menu-design" className="iq-waves-effect collapsed" data-toggle="collapse"
                aria-expanded="false"><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '5px' }} /><span>Settings</span>
                <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5px' }} /></a>
              <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                <li><a href="/"><i className="ri-git-commit-line"></i>Stores</a></li>
                <li><a href="/"><i className="ri-text-spacing"></i>Company Info</a></li>
              </ul>
            </li>

          </ul>
        </nav>
        <div className="p-3"></div>
      </div>
    </div>
  )
}

export default AppSidebar