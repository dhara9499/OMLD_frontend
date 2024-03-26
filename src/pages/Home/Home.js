import React from 'react';
import home from './home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


import products from '../../assets/images/products.jpeg';
import orders from '../../assets/images/orders.jpeg';
import customers from '../../assets/images/customers.png';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';

function Home() {
  return (
    <div className={home.homeScreen}>
    <div className="container">
      <div className="row">
        <Card
          title="Products"
          module="products"
          imageUrl={products}
        />
        <Card
          title="Orders"
          module="orders"
          imageUrl={orders}
        />
        <Card
          title="Customers"
          module="customers"
          imageUrl={customers}
        />
      </div>
    </div>
    </div>
  );
}

export default Home;