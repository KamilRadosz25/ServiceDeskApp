import React from "react";

const Menu = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link text-white" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Customers
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
