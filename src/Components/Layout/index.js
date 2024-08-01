import { Link, redirect, useNavigate } from "react-router-dom";
import "./style.css";

export default function Layout(props) {
  let navigate = useNavigate(); 
  const {doCompress = false}  = props;
  const toggleClick = () => {
  
      console.log('Call Function')
      // props.doCompress();
    
    document.querySelector("#sidebar").classList.toggle("expand");
  }
  return (
    <div className="wrapper">
      <aside id="sidebar">
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={() => toggleClick()}>
            <i className="lni lni-grid-alt"></i>
          </button>
          <div className="sidebar-logo">
            <Link to="#">Pos</Link>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <Link to="#" className="sidebar-link">
              <i className="lni lni-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#master"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-archive"></i>
              <span>Masters</span>
            </Link>
            <ul
              id="master"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  POS Devices
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Dining Options
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Payment Types
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Other Charges On Bill
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#manage"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-layout"></i>
              <span>Inventory Management</span>
            </Link>
            <ul
              id="manage"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Items
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Categories
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Discounts
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  MOdifiers
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Tax
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link to="#" className="sidebar-link">
              <i className="lni lni-rupee"></i>
              <span>Bills</span>
            </Link>
          </li>
          {/* <li className="sidebar-item">
            <Link to="#" className="sidebar-link">
              <i className="lni lni-agenda"></i>
              <span>Task</span>
            </Link>
          </li> */}
          {/* <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-protection"></i>
              <span>Auth</span>
            </Link>
            <ul
              id="auth"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Login
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Register
                </Link>
              </li>
            </ul>
          </li> */}
          {/* <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#multi"
              aria-expanded="false"
              aria-controls="multi"
            >
              <i className="lni lni-layout"></i>
              <span>General</span>
            </Link>
            <ul
              id="multi"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link
                  to="#"
                  className="sidebar-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#multi-two"
                  aria-expanded="false"
                  aria-controls="multi-two"
                >
                  Two Links
                </Link>
                <ul
                  id="multi-two"
                  className="sidebar-dropdown list-unstyled collapse"
                >
                  <li className="sidebar-item">
                    <Link to="#" className="sidebar-link">
                      Link 1
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="#" className="sidebar-link">
                      Link 2
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}

          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#general"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-cog"></i>
              <span>General</span>
            </Link>
            <ul
              id="general"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link t0="#" className="sidebar-link">
                  Employees
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Roles
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Customer Management
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Audits
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Subscription
                </Link>
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#report"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-bar-chart"></i>
              <span>Reports</span>
            </Link>
            <ul
              id="report"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Employees
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Roles
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Customer Management
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Audits
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">
                  Subscription
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className="sidebar-item">
            <Link to="#" className="sidebar-link">
              <i className="lni lni-popup"></i>
              <span>Notification</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#" className="sidebar-link">
              <i className="lni lni-cog"></i>
              <span>Setting</span>
            </Link>
          </li> */}
        </ul>
        <div className="sidebar-footer">
          <Link to="#" className="sidebar-link" onClick={(e) => {
            e.preventDefault();
            localStorage.clear();
            console.log('Clear')
            navigate('/login')
          }}>
            <i className="lni lni-exit"></i>
            <span>Logout</span>
          </Link>
        </div>
      </aside>
      <div className="main p-0 m-0">
        {props.children}
      </div>
    </div>
  );
}
