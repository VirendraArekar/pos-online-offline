import React from 'react'
import { BsUpcScan, BsSearch } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { HiOutlineDocument } from "react-icons/hi2";
import { HiOutlineUserAdd } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function index(props) {
  const {name, action, changeAction} = props;
  return (
    <>
      {
        name === 'assign customer' &&
        <nav
        className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
        style={{ backgroundColor: '#4CAF50' }}
            >
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
                <BiArrowBack size={24} />
            </Link>
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
                Add customer to Bill
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
                <ul className="navbar-nav justify-content-end flex-grow-1 mx-2">
                    <li className="nav-item">
                    <Link
                          className="nav-link active"
                          aria-current="page"
                          to="#!"
                        >
                          <BsUpcScan size={24} color="#ffffff" />
                    </Link>
                    </li>
                    <li className="nav-item">
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
      }

      {
          name === 'refund pay' &&
          <nav
              className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
              style={{ backgroundColor: '#4CAF50' }}
          >
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
              <BiArrowBack size={24} />
            </Link>
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
              {props?.title}
            </Link>


          </nav>
      }
      {
          name === 'assign customer to bill' &&
          <nav
              className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
              style={{ backgroundColor: '#4CAF50' }}
          >
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
              <BiArrowBack size={24} />
            </Link>
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
              Add Bill To
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
                <ul className="navbar-nav justify-content-end flex-grow-1 mx-2">
                  <li className="nav-item">
                    <button
                        className="nav-link active text-light"
                        aria-current="page"
                    >
                      ASSIGN
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      }
      {
        name === 'open ticket' &&
          <nav
              className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
              style={{backgroundColor: '#4CAF50'}}
          >
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{fontSize: 24, fontWeight: "500"}}
            >
              <BiArrowBack size={24}/>
            </Link>
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{fontSize: 20, fontWeight: "500"}}
            >
              Open Tickets
            </Link>

            {
                action !== null &&
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
                    <ul className="navbar-nav justify-content-end flex-grow-1 mx-2">
                      <li className="nav-item">
                        <Link
                            className="nav-link active mx-2"
                            aria-current="page"
                            to="#!"
                        >
                          <FiTrash size={24} color="#ffffff"/>
                          {/*<BsUpcScan size={24} color="#ffffff"/>*/}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <button
                            className="nav-link active mx-2"
                            aria-current="page"
                            onClick={() => changeAction('edit')}
                        >
                          <HiOutlineDocument size={24} color="#ffffff"/>
                          {/*<BsSearch size={24} color="#ffffff"/>*/}
                        </button>
                      </li>
                      <li className="nav-item">
                        <Link
                            className="nav-link active mx-2"
                            aria-current="page"
                            to="#!"
                        >
                          <HiOutlineUserAdd size={24} color="#ffffff"/>
                          {/*<BsSearch size={24} color="#ffffff"/>*/}
                        </Link>
                      </li>

                    </ul>
                  </div>
                </div>
            }

          </nav>
      }
      {
          name === 'edit ticket' &&
          <nav
              className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
              style={{backgroundColor: '#4CAF50'}}
          >
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{fontSize: 24, fontWeight: "500"}}
            >
              <BiArrowBack size={24}/>
            </Link>
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{fontSize: 20, fontWeight: "500"}}
            >
              Edit Ticket
            </Link>

            {
                action !== null &&
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
                    <ul className="navbar-nav justify-content-end flex-grow-1 mx-2">
                      <li className="nav-item">
                        <button
                            className="nav-link active mx-2 text-light"
                            aria-current="page"
                            onClick={() => props?.onMoveClick()}
                        >
                          MOVE
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
            }

          </nav>
      }
      {
          name === 'product' &&
          <nav
              className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
              style={{backgroundColor: '#4CAF50'}}
          >
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{fontSize: 24, fontWeight: "500"}}
            >
              <BiArrowBack size={24}/>
            </Link>
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{fontSize: 20, fontWeight: "500"}}
            >
              {action} Product
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
                <ul className="navbar-nav justify-content-end flex-grow-1 mx-2">
                  <li className="nav-item">
                    <Link
                        className="nav-link active text-light"
                        aria-current="page"
                        to="#!"
                    >
                      Save
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      }

      {
          name === 'customer profile' &&
          <nav
              className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
        style={{ backgroundColor: '#4CAF50' }}
            >
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
                <BiArrowBack size={24} />
            </Link>
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
                {action} Customer Profile
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
                <ul className="navbar-nav justify-content-end flex-grow-1 mx-2">
                    <li className="nav-item">
                    <Link
                          className="nav-link active text-light"
                          aria-current="page"
                          to="#!"
                        >
                          Add To Bill
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      }

      {
        name === 'edit customer' &&
        <nav
        className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
        style={{ backgroundColor: '#4CAF50' }}
            >
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
                <BiArrowBack size={24} />
            </Link>
            <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
                Edit Customer
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
                <ul className="navbar-nav justify-content-end flex-grow-1 mx-2">
                    <li className="nav-item">
                    <Link
                          className="nav-link active text-light"
                          aria-current="page"
                          to="#!"
                        >
                          UPDATE
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      }
    </>
  )
}
