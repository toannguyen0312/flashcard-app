import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function CardList({ cards, id }) {
const{url} = useRouteMatch();
return (
    <div className="card">
        <div className="card-body">
            <p>{cards.front}</p>
            <p>{cards.back}</p>
            <Link to={`${url}/cards/${id}/edit`}><button type="button" className="btn btn-secondary">Edit</button></Link>
            <button type="button" className="btn btn-danger">Delete</button>
        </div>
    </div>
)
}

export default CardList;