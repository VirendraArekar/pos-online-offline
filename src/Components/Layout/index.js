import "./style.css";

export default function Layout(props) {
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
            <a href="#">Pos</a>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#master"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-archive"></i>
              <span>Masters</span>
            </a>
            <ul
              id="master"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  POS Devices
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Dining Options
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Payment Types
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Other Charges On Bill
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#manage"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-layout"></i>
              <span>Inventory Management</span>
            </a>
            <ul
              id="manage"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Items
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Categories
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Discounts
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  MOdifiers
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Tax
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-rupee"></i>
              <span>Bills</span>
            </a>
          </li>
          {/* <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-agenda"></i>
              <span>Task</span>
            </a>
          </li> */}
          {/* <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-protection"></i>
              <span>Auth</span>
            </a>
            <ul
              id="auth"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Login
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Register
                </a>
              </li>
            </ul>
          </li> */}
          {/* <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#multi"
              aria-expanded="false"
              aria-controls="multi"
            >
              <i className="lni lni-layout"></i>
              <span>General</span>
            </a>
            <ul
              id="multi"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a
                  href="#"
                  className="sidebar-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#multi-two"
                  aria-expanded="false"
                  aria-controls="multi-two"
                >
                  Two Links
                </a>
                <ul
                  id="multi-two"
                  className="sidebar-dropdown list-unstyled collapse"
                >
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Link 1
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Link 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}

          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#general"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-cog"></i>
              <span>General</span>
            </a>
            <ul
              id="general"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Employees
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Roles
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Customer Management
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Audits
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Subscription
                </a>
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#report"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-bar-chart"></i>
              <span>Reports</span>
            </a>
            <ul
              id="report"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Employees
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Roles
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Customer Management
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Audits
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Subscription
                </a>
              </li>
            </ul>
          </li>
          {/* <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-popup"></i>
              <span>Notification</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-cog"></i>
              <span>Setting</span>
            </a>
          </li> */}
        </ul>
        <div className="sidebar-footer">
          <a href="#" className="sidebar-link">
            <i className="lni lni-exit"></i>
            <span>Logout</span>
          </a>
        </div>
      </aside>
      <div className="main p-0 m-0">
        {props.children}
      </div>
    </div>
  );
}
