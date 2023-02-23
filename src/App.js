import React from 'react'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCreate from './views/pages/UserCreate/UserCreate';
import CustomerCreate from './views/pages/CustomerCreate/CustomerCreate';
import SupplierCreate from './views/pages/SupplierCreate/SupplierCreate';
import ProductEntryForm from './views/pages/ProductEntryForm/ProductEntryForm';
import CategoryEntryForm from './views/pages/CategoryEntryForm/CategoryEntryForm';
import BrandEntryForm from './views/pages/BrandEntryForm/BrandEntryForm';


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
          <Route path="/user/create" element={<UserCreate />} />
          <Route path="/customer/create" element={<CustomerCreate />} />
          <Route path="/supplier/create" element={<SupplierCreate />} />
          <Route path="/product/entry" element={<ProductEntryForm />} />
          <Route path="/category/entry" element={<CategoryEntryForm />} />
          <Route path="/brand/entry" element={<BrandEntryForm />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/elements" element={<Elements />} />
      </Routes>
    </div>
  );
}

export default App;
