import React, {useState} from "react";
import './RentalCard.css'
import { Link } from "react-router-dom";

const RentalCard = ({rental}) => {
    return (
        <Link
        to={`/rental/${rental.id}`}
        state={{ rental }}
        className="card"
        >
        <div className="card">
            
            <img src={rental.cover} />
            
            <div className="card-content">
            <h3 className="card-title">{rental.title}</h3>
            
            </div>
        </div>
        </Link>
    )
}
export default RentalCard
