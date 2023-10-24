import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function CardList({ cards, id }) {
const{url} = useRouteMatch();
return (
    <div className="card shadow" style={{marginBottom:"10px"}}>
        <div className="card-body">
            <p>{cards.front}</p>
            <p>{cards.back}</p>
            <Link to={`${url}/cards/${id}/edit`}><button type="button" className="btn btn-secondary shadow" >Edit</button></Link>
            <button type="button" className="btn btn-danger shadow" style={{marginLeft:"7px"}}>Delete</button>
        </div>
    </div>
)
}

export default CardList;