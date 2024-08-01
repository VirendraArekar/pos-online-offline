import React from "react";
import { color, font } from "../../utils/cssConstant";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaClockRotateLeft, FaAlignLeft, FaEllipsisVertical  } from "react-icons/fa6";
import { BsUpcScan, BsSearch, BsFillPersonPlusFill, BsBell } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { VscFilePdf } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";
import {BiArrowBack} from "react-icons/bi";
import { Link } from "react-router-dom";

export default function index(props) {
  const { screen, onCustomerClick , onTicketClick, onProductClick, toggle = true} = props;
  const navColor = (scr) => {
    switch (scr) {
      case "orders":
        return color?.nav?.bgColor;
      case "products":
        return "#4CAF50";
      default:
        return "#4CAF50";
    }
  };
  return (
    <>
      {screen === "orders" && (
        <nav
          className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
          style={{ backgroundColor: navColor(screen) }}
        >
          <div className="container-fluid">
            <Link
              className="nav-link active fw-bold"
              aria-current="page"
              to="#!"
              style={{ fontSize: font?.navTextSize }}
            >
              Orders
            </Link>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="#!"
                    >
                      <FaClockRotateLeft size={24} color="#ffffff" />
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#!"
                      id="accountDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FiMoreHorizontal size={30} color="#ffffff" />
                    </Link>
                    <ul
                      className="dropdown-menu border-0 shadow bsb-zoomIn"
                      aria-labelledby="accountDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="#!">
                          Log in
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#!">
                          Lost Password?
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#!">
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
      {screen === "products" && (
        <div className="container-fluid w-100 m-0 p-0">
          <div className="row m-0 p-0 w-100">
            <div className="col-sm-8 col-md-8 col-lg-8 m-0 p-0">
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
                style={{ backgroundColor: navColor(screen) }}
              >
                <Link
                  className="nav-link active fw-bold mx-3"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 24 }}
                >
                  <FaAlignLeft />
                </Link>
                <span className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#!"
                    id="accountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: 24, fontWeight: "500" }}
                  >
                    All Products
                  </Link>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="accountDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="#!" onClick={() => onProductClick('add')}>
                        Add Product
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="#!">
                        Lost Password?
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        Sign up
                      </Link>
                    </li> */}
                  </ul>
                </span>

                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                        >
                          <BsUpcScan size={24} color="#ffffff" />
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                        >
                          <BsSearch size={24} color="#ffffff" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0 border-start">
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
                style={{ backgroundColor: navColor(screen) }}
              >
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 24, fontWeight: "500" }}
                >
                  Bills
                </Link>
                <Link
                  className="nav-link active mx-0"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 24, fontWeight: "500" }}
                >
                  <span className="border px-2">2</span>
                </Link>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                          onClick={() => onCustomerClick(true)}
                        >
                          <BsFillPersonPlusFill size={24} color="#ffffff" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                          onClick={() => onTicketClick(true)}
                        >
                          <FaEllipsisVertical  size={24} color="#ffffff" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
      {screen === "items" && (
        <div className="container-fluid w-100 m-0 p-0">
          <div className="row m-0 p-0 w-100">
          <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0">
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light py-2"
                style={{ backgroundColor: navColor(screen) }}
              >
                <Link
                  className="nav-link active fw-bold mx-3"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 27.5 }}
                >
                  <FaAlignLeft size={24} color="#ffffff"/>
                </Link>
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 24, fontWeight: "500" }}
                >
                  Items
                </Link>
              </nav>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8 m-0 p-0 border-start">
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
                style={{ backgroundColor: navColor(screen) }}
              >
                <span className="nav-item dropdown mx-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#!"
                    id="accountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: 24, fontWeight: "500" }}
                  >
                    All Items
                  </Link>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="accountDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="#!">
                        Log in
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        Lost Password?
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </span>

                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                        >
                          <BsUpcScan size={24} color="#ffffff" />
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                        >
                          <BsSearch size={24} color="#ffffff" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            
          </div>
        </div>
      )}
      {screen === "setting" && (
        <div className="container-fluid w-100 m-0 p-0">
          <div className="row m-0 p-0 w-100">
          <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0">
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light py-2"
                style={{ backgroundColor: navColor(screen) }}
              >
                <Link
                  className="nav-link active fw-bold mx-3"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 27.5 }}
                >
                  <FaAlignLeft size={24} color="#ffffff"/>
                </Link>
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 24, fontWeight: "500" }}
                >
                  Settings
                </Link>
              </nav>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8 m-0 p-0 border-start">
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
                style={{ backgroundColor: navColor(screen) }}
              >

                <Link
                  className="nav-link active mx-4"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 24, fontWeight: "500" , lineHeight : 1.73}}
                >
                  Store Information
                </Link>
  
              </nav>
            </div>
            
          </div>
        </div>
      )}
      {screen === "receipts" && (
        <div className="container-fluid w-100 m-0 p-0 fixed-top">
          <div className="row m-0 p-0 w-100">
            <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0" style={{backgroundColor: navColor(screen)}}>
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light py-2 justify-content-between"
                style={{ backgroundColor: navColor(screen) }}
              >
                <Link
                  className="nav-link active fw-bold mx-3 py-1"
                  aria-current="page"
                  to="#!"
                  
                >
                  <FaAlignLeft size={24} color="#ffffff"/>
                  <span style={{ fontSize: 22, fontWeight: "500" }} className="px-3">Receipts</span>
                </Link>
              
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 22, fontWeight: "500" }}
                >
                  <BsSearch size={24} color="#ffffff" />
                </Link>
              </nav>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8 m-0 p-0 border-start">
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
                style={{ backgroundColor: navColor(screen) }}
              >
                <span className="nav-item mx-3">
                  <Link
                    className="nav-link "
                    to="#!"
                    id="accountDropdown"
                    role="button"
                    aria-expanded="false"
                    style={{ fontSize: 22, fontWeight: "500" }}
                  >
                   #TRX0101211113
                  </Link>
                 
                </span>

                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                      
                      <li className="nav-item">
                        <Link
                          className="nav-link active text-light"
                          aria-current="page"
                          style={{fontSize : 22, fontWeight : 500}}
                          to="#!"
                        >
                          <IoShareSocialOutline   />
                          <span style={{fontSize : 13}} className="mx-1">Share</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active text-light"
                          aria-current="page"
                          style={{fontSize : 22, fontWeight : 500}}
                          to="#!"
                        >
                          <VscFilePdf  />
                          <span style={{fontSize : 13}} className="mx-1">Save as PDF</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active text-light"
                          aria-current="page"
                          style={{fontSize : 22, fontWeight : 500}}
                          to="#!"
                        >
                          <CiMail  />
                          <span style={{fontSize : 13}} className="mx-1">Share</span>
                        </Link>
                      </li>
                      <li className="nav-item me-3">
                        <Link
                          className="nav-link active text-light"
                          aria-current="page"
                          style={{fontSize : 22, fontWeight : 500}}
                          to="#!"
                        >
                          <FaWhatsapp />
                          <span style={{fontSize : 13}} className="mx-1">Whatsapp</span>
                        </Link>
                      </li>
                      <li className="nav-item pe-3">
                        <Link
                          className="nav-link active text-light"
                          aria-current="page"
                          style={{fontSize : 22, fontWeight : 500}}
                          to="/refund-receipt"
                        >
                          REFUND
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            
          </div>
        </div>
      )}

      {screen === "dashboard" && (
        <div className="container-fluid w-100 m-0 p-0">
          <div className="row m-0 p-0 w-100" style={{ backgroundColor: navColor(screen) }}>
            {
              toggle &&
            <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0">
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light py-2"
                style={{ backgroundColor: navColor(screen) }}
              >
                {/* <Link
                  className="nav-link active fw-bold mx-3"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 27.5 }}
                >
                  <FaAlignLeft size={24} color="#ffffff"/>
                </Link> */}
                {/* <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 24, fontWeight: "500" }}
                >
                  Items
                </Link> */}
              </nav>
            </div>
            }

            <div className={`${toggle ? 'col-sm-8 col-md-8 col-lg-8' : 'col-sm-12 col-md-12 col-lg-12'} m-0 p-0 border-start`}>
              <nav
                className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
                style={{ backgroundColor: navColor(screen) }}
              >


                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                      <li className="nav-item my-2">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                        >
                          <BsSearch size={24} color="#ffffff" />
                        </Link>
                      </li>
                      <li className="nav-item me-1  my-2">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                          style={{ position: 'relative' }}
                        >
                          <BsBell size={24} color="#ffffff" />
                          <span className="rounded-circle  bg-light align-middle" style={{ position: 'absolute', width: 12, height: 12, top: 0, right: 0 }}>4</span>
                        </Link>
                      </li>
                      <span className="nav-item dropdown mx-3 ms-0 text-light">
                        <Link
                          className="nav-link"
                          // className="nav-link dropdown-toggle"
                          to="#!"
                          id="accountDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ fontSize: 24, fontWeight: "500" }}
                        >
                          <img src={require('../../Data/images/avatar.jpeg')} alt="my love" width="40" height={40} className="border rounded-circle" />
                        </Link>
                        <ul
                          className="dropdown-menu border-0 shadow bsb-zoomIn text-light"
                          aria-labelledby="accountDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="#!">
                              Log in
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              Lost Password?
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              Sign up
                            </Link>
                          </li>
                        </ul>
                      </span>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

          </div>
        </div>
      )}

      {screen === "refund" && (
          <div className="container-fluid w-100 m-0 p-0">
            <div className="row m-0 p-0 w-100" style={{ backgroundColor: navColor(screen) }}>

                <nav
                    className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light py-2"
                    style={{ backgroundColor: navColor(screen) }}
                >
                  <Link
                  className="nav-link active fw-bold mx-3"
                  aria-current="page"
                  to="/receipts"
                  style={{ fontSize: 27.5 }}
                >
                    <BiArrowBack size={24} color="#ffffff"/>
                </Link>
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="#!"
                  style={{ fontSize: 24, fontWeight: "500" }}
                >
                  Receipts
                </Link>
                </nav>
              </div>



          </div>
      )}
     
    </>
  );
}
