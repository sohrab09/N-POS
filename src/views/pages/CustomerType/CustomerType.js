import React, { useEffect, useState } from 'react';
import './CustomerType.css';
import Table from 'react-bootstrap/Table';
import { Get } from '../../../http/http';


const CustomerType = () => {


  const [loading, setLoading] = useState(false)
  const [getCustomerType, setGetCustomerType] = useState([]);

  useEffect(() => {
    setLoading(true)
    const getAllCustomerTypeData = () => {
      try {
        Get('api/CustomerType/GetAll')
          .then((res) => {
            console.log("Get All Customer Type ------>>>>> ", res);
            if (res.data.statusCode === 200) {
              setLoading(false)
              setGetCustomerType(res.data.data);
            }
          })
      } catch (error) {
        setLoading(false)
        console.log("Get All Customer Type Error ----->>>>>", error)
      }
    };
    getAllCustomerTypeData();
  }, []);

  return (
    <div className="container-fluid p-0 m-0">
      {
        loading === true ?
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <Table>
            <thead style={{ backgroundColor: '#704cb6', color: '#fff', fontSize: '15px', fontWeight: 'bolder' }}>
              <tr>
                <th>S/N</th>
                <th>Customer Type</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {
                getCustomerType.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.discount}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
      }
    </div>

  );
}

export default CustomerType;