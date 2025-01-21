import React from "react";
import './RentalPage.css'
import { useLocation } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const RentalPage = () => {
    const location = useLocation();
    const rental = location.state?.rental;
  
    if (!rental) {
      return (
        <PageNotFound/>
      )
    }
  
    return (
      <div className="rental">
        <img className="rental-image" src={rental.cover} alt={rental.title} />
  
      <div className="rental-content">
        <div className="rental-content_overview">
          
          <div className="rental-content_header">
            <h2 className="rental-content_header_title">{rental.title}</h2>
            <p className="rental-content_header_location">{rental.location}</p>
          </div>

        
        <div className="rental-content_host">
            
            <div className="rental-content_host_name">{rental.host.name}</div>
          <img
            className="rental-content_host_picture"
            src={rental.host.picture}
            alt={`${rental.host.name}`}
          />
        </div>
      </div>
          
          <div className="rental-content_info">
            <div className="rental-content_info_tags">
              {rental.tags.map((tag, index) => (
                <span className="rental-content_info_tags_tag" key={`${tag}-${index}`}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="rental-content_info_rating">{"★".repeat(rental.rating)}</div>
          </div>
  
          
          <div className="rental-content_dropdowns">
            <DropdownMenu title="Description" content={rental.description} />
            <DropdownMenu
              title="Equipements"
              content={
                <ul className="rental-content-equipments">
                  {rental.equipments.map((equipment, index) => (
                    <li key={`${equipment}-${index}`}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    )
  }

  export default RentalPage