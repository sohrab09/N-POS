import React from 'react'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// User Management
import UserCreate from './views/pages/UserCreate/UserCreate';
import CustomerCreate from './views/pages/CustomerCreate/CustomerCreate';
import SupplierCreate from './views/pages/SupplierCreate/SupplierCreate';
import CustomerType from './views/pages/CustomerType/CustomerType';

// Product Management
import ProductEntryForm from './views/pages/ProductEntryForm/ProductEntryForm';
import CategoryEntryForm from './views/pages/CategoryEntryForm/CategoryEntryForm';
import BrandEntryForm from './views/pages/BrandEntryForm/BrandEntryForm';
import UnitEntryForm from './views/pages/UnitEntryForm/UnitEntryForm';
import Attributes from './views/pages/Attributes/Attributes';

// Purchase Management
import PurchaseOrder from './views/pages/PurchaseOrder/PurchaseOrder';

// Not Found
import NotFound from './views/pages/NotFound/NotFound';


// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/Login/Login'))
const Register = React.lazy(() => import('./views/pages/Register/Register'))
const Elements = React.lazy(() => import('./views/Elements/Elements'))

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>

          {/* User Management */}
          <Route path="/user/userCreate" element={<UserCreate />} />
          <Route path="/user/customerCreate" element={<CustomerCreate />} />
          <Route path="/user/supplierCreate" element={<SupplierCreate />} />
          <Route path="/user/customerType" element={<CustomerType />} />

          {/* Product Management */}
          <Route path="/products/productCreate" element={<ProductEntryForm />} />
          <Route path="/products/categoryCreate" element={<CategoryEntryForm />} />
          <Route path="/products/brandCreate" element={<BrandEntryForm />} />
          <Route path="/products/unitCreate" element={<UnitEntryForm />} />
          <Route path="/products/attributesCreate" element={<Attributes />} />

          {/* Purchase Management */}
          <Route path="/purchase/order" element={<PurchaseOrder />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/elements" element={<Elements />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
