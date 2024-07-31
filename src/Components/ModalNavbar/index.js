import React from 'react'
import { BsUpcScan, BsSearch } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { HiOutlineDocument } from "react-icons/hi2";
import { HiOutlineUserAdd } from "react-icons/hi";

export default function index(props) {
  const {name, action, onChange = null, changeAction} = props;
  return (
    <>
      {
        name === 'assign customer' &&
        <nav
        className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
        style={{ backgroundColor: '#4CAF50' }}
            >
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
                <BiArrowBack size={24} />
            </a>
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
                Add customer to Bill
            </a>
           
            <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
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
                    <a
                          className="nav-link active"
                          aria-current="page"
                          href="#!"
                        >
                          <BsUpcScan size={24} color="#ffffff" />
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                          className="nav-link active"
                          aria-current="page"
                          href="#!"
                        >
                          <BsSearch size={24} color="#ffffff" />
                     </a>
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
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
              <BiArrowBack size={24} />
            </a>
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
              {props?.title}
            </a>


          </nav>
      }
      {
          name === 'assign customer to bill' &&
          <nav
              className="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret text-light"
              style={{ backgroundColor: '#4CAF50' }}
          >
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
              <BiArrowBack size={24} />
            </a>
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
              Add Bill To
            </a>

            <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
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
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{fontSize: 24, fontWeight: "500"}}
            >
              <BiArrowBack size={24}/>
            </a>
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{fontSize: 20, fontWeight: "500"}}
            >
              Open Tickets
            </a>

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
                        <a
                            className="nav-link active mx-2"
                            aria-current="page"
                            href="#!"
                        >
                          <FiTrash size={24} color="#ffffff"/>
                          {/*<BsUpcScan size={24} color="#ffffff"/>*/}
                        </a>
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
                        <a
                            className="nav-link active mx-2"
                            aria-current="page"
                            href="#!"
                        >
                          <HiOutlineUserAdd size={24} color="#ffffff"/>
                          {/*<BsSearch size={24} color="#ffffff"/>*/}
                        </a>
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
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{fontSize: 24, fontWeight: "500"}}
            >
              <BiArrowBack size={24}/>
            </a>
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{fontSize: 20, fontWeight: "500"}}
            >
              Edit Ticket
            </a>

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
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{fontSize: 24, fontWeight: "500"}}
            >
              <BiArrowBack size={24}/>
            </a>
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{fontSize: 20, fontWeight: "500"}}
            >
              {action} Product
            </a>

            <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
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
                    <a
                        className="nav-link active text-light"
                        aria-current="page"
                        href="#!"
                    >
                      Save
                    </a>
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
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
                <BiArrowBack size={24} />
            </a>
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
                {action} Customer Profile
            </a>
           
            <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
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
                    <a
                          className="nav-link active text-light"
                          aria-current="page"
                          href="#!"
                        >
                          Add To Bill
                    </a>
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
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 24, fontWeight: "500" }}
            >
                <BiArrowBack size={24} />
            </a>
            <a
                className="nav-link active mx-2"
                aria-current="page"
                href="#!"
                style={{ fontSize: 20, fontWeight: "500" }}
            >
                Edit Customer
            </a>
           
            <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
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
                    <a
                          className="nav-link active text-light"
                          aria-current="page"
                          href="#!"
                        >
                          UPDATE
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      }
    </>
  )
}
