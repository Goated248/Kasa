import React from "react";
import './Logement.css'
import { useLocation } from "react-router-dom";
import PageNotFound from "../404/404";
import DropdownMenu from "../../component/DropdownMenu/DropdownMenu";
import Carrousel from "../../component/Carrousel/Carrousel";

const Logement = () => {
    const location = useLocation();
    const rental = location.state?.rental;
  
    if (!rental) {
      return (
        <PageNotFound/>
      )
    }
  
    return (
      <div className="rental">
        <Carrousel pictures={rental.pictures} cover={rental.cover} />
  
        <div className="rental-content">
          <div className="rental-content_overview">
          
            <div className="rental-content_infos">
              <h2 className="rental-content_infos_title">{rental.title}</h2>
              <p className="rental-content_infos_location">{rental.location}</p>

            
              <div className="rental-content_infos_tags">
                {rental.tags.map((tag, index) => (
                  <span className="rental-content_infos_tags_tag" key={`${tag}-${index}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            
            <div className="rental-content_host">
              <div className="rental-content_host_info">
                <div className="rental-content_host_info_name">{rental.host.name}</div>
                <img
                  className="rental-content_host_info_picture"
                  src={rental.host.picture}
                  alt={`${rental.host.name}`}
                />
              </div>

              <div className="rental-content_host_rating">
                {[...Array(5)].map((_, index) => {
                  return (
                    <span
                      key={index}
                      className={index < rental.rating ? "filled" : "empty"}
                    >
                      ★
                    </span>
                  )
                })}
              </div>
            </div>
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

  export default Logement