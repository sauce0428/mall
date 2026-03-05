import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

            {/* 드롭다운 영역 */}
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
                    <Link to="/todo/read/20">READ</Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <Link to="#">예비용</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="nav-right">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
