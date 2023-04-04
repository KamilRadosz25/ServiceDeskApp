import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { AiOutlineDesktop, AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboard, MdOutlineManageSearch } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { FiUsers } from "react-icons/fi";

const SideBar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none px-3"
      >
        <span className="fs-4">
          <AiOutlineDesktop className="me-2" />
          easydesk
        </span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            className="nav-link text-white d-flex align-items-center"
            to={"/"}
          >
            <AiOutlineHome className="me-2" />
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to={"/dashboard"}>
            <MdOutlineDashboard className="me-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to={"/tickets"}>
            <GoReport className="me-2" />
            Tickets
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to={"/users"}>
            <FiUsers className="me-2" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to={"/easydeskdev"}>
            <MdOutlineManageSearch className="me-2" />
            EasydeskDev
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li></li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
