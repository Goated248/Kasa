import React,{useState} from "react";
import './DropdownMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      
        <div className={`dropdown-content ${isOpen ? "expanded" : ""}`}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <div>{content}</div>
          )}
        </div>
      
    </div>
    )
}
export default DropdownMenu