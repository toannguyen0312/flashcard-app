import React from  "react";

function Card({ card, numberOfCard, cardNum}) {
return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Card {cardNum} of{numberOfCard}</h5>
            <h6 className="card-text"></h6>
            <button type="button" className="btn btn-secondary"></button>
        </div>
    </div>
)
}

export default Card;