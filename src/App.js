import React from 'react'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCreate from './views/pages/UserCreate/UserCreate';
import CustomerCreate from './views/pages/CustomerCreate/CustomerCreate';


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
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/elements" element={<Elements />} />
      </Routes>
    </div>
  );
}

export default App;
