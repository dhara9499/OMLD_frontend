import React, { useState } from "react";
import navbar from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import Brand from '../../assets/images/logo.jpeg';
import { FaBars } from "react-icons/fa";
import Dropdown from '../Dropdown/Dropdown.js';


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    return (


      <nav className={navbar.navbar}>
          <div className={navbar.logo}>
            <img src={Brand} alt="Heaer image" />
          </div>
          <div className={navbar.navElements}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={navbar.products}>
                <NavLink to="/products">Products</NavLink>
                <div className={navbar.productsSubLink}>
                  <ul className={navbar.dropdownMenu}>
                    <li><NavLink to="/products/addNewProducts">Add New Products</NavLink></li>
                    <li><NavLink to="/products/manageProducts">Manage Products</NavLink></li>
                  </ul>
                </div>
              </li>
              <li className={navbar.orders}>
                <NavLink to="/orders">Orders</NavLink>
                <div className={navbar.ordersSubLink}>
                  <ul className={navbar.dropdownMenu}>
                    <li><NavLink to="/orders/billing">Billing</NavLink></li>
                    <li><NavLink to="/orders/manageOrders">Manage Orders</NavLink></li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink to="/customers">Customers</NavLink>
              </li>
            </ul>
            <div className={navbar.hamburgerMenu}>
              <NavLink to="/"><FaBars/></NavLink>
            </div>
        </div> 
      </nav>
    )
  }

export default Navbar;