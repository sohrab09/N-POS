import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/Login/Login'))
const Register = React.lazy(() => import('./views/pages/Register/Register'))
const Elements = React.lazy(() => import('./views/Elements/Elements'))

function App() {

  return (
    <>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/elements" element={<Elements />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
