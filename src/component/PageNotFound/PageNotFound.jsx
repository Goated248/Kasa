import React from "react";
import './PageNotFound.css'
const PageNotFound= ()=> {
    return(
        <div className="notfound">
            <h2 className="notfound-title">404</h2>
            <p className="notfound-text">Oups! La page que vous demandez n'existe pas</p>
            <p className="notfound-link">Retourner à la page d'acceuil</p>
        </div>
    )
}
export default PageNotFound