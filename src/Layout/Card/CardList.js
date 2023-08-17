import React from "react";

function CardList({ cards }) {
return (
    <div className="card">
        <div className="card-body">
            <p>{cards.front}</p>
            <p>{cards.back}</p>
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
        </div>
    </div>
)
}

export default CardList;