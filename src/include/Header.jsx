import "./Header.css"
import { useState } from "react"

export default function Header(){
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen)
    }

  return <>
    <nav className="custom-navbar"> 
      <div className="nav-container"> 
        <div className="nav-left"> 
          <a href="/" className="nav-link"> MAIN </a> 
          <a href="/about" className="nav-link"> ABOUT </a> 
 
          {/* 드롭다운 영역 */} 
          <div className="nav-dropdown"> 
            <button className="dropdown-toggle" onClick={toggleDropdown}> 
              TODO <span className="arrow">▾</span> 
            </button> 
 
            {isDropdownOpen && ( 
              <ul className="dropdown-menu"> 
                <li><a href="/todo/list">LIST</a> </li> 
                <li> <a href="/todo/add">ADD</a></li> 
                <li className="divider"></li> 
                <li> <a href="#">예비용</a></li> 
              </ul> 
            )} 
          </div> 
        </div> 
        <div className="nav-right"> 
          <a href="#" className="nav-link"> 
            Login 
          </a> 
        </div> 
      </div> 
    </nav>
  
  </>
}