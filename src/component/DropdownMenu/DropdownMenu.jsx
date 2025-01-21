import React,{useState} from "react";
import './DropdownMenu.css'
const DropdownMenu = ({title, content}) => {
    
    const [isOpen, setIsOpen]= useState(false)

    const toogleDropdown = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown">
      <div className="dropdown-header" onClick={toogleDropdown}>
        <h3>{title}</h3>
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
    )
}
export default DropdownMenu