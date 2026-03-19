import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const loginState = useSelector((state) => state.loginSlice);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsProductDropdownOpen(false);
  };
  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              MAIN
            </Link>
            <Link to="/about" className="nav-item">
              ABOUT
            </Link>

            {/* todo 드롭다운 영역 */}
            {loginState.email ? (
              <>
                <div className="nav-dropdown">
                  <button className="dropdown-toggle" onClick={toggleDropdown}>
                    TODO<span className="arrow">▾</span>
                  </button>

                  {isDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/todo/list">LIST</Link>
                      </li>
                      <li>
                        <Link to="/todo/add">ADD</Link>
                      </li>
                      <li>
                        <Link to="/todo/modify">MODIFY</Link>
                      </li>
                      <li>
                        <Link to="/todo/read/20">READ</Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <Link to="#">예비용</Link>
                      </li>
                    </ul>
                  )}
                </div>
                {/* product 드롭다운 영역 */}
                <div className="nav-dropdown">
                  <button
                    className="dropdown-toggle"
                    onClick={toggleProductDropdown}
                  >
                    PRODUCT <span className="arrow">▾</span>
                  </button>

                  {isProductDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/product/list">LIST</Link>
                      </li>
                      <li>
                        <Link to="/product/add">ADD</Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">예비용</a>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="nav-right">
            {!loginState.email ? (
              <Link to="/member/login" className="login-link">
                Login
              </Link>
            ) : (
              <Link to="/member/logout" className="login-link">
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
