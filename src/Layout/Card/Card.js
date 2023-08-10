import React from  "react";

function Card({ card, numberOfCard, cardNum, flipped, flippedHandler, nextHandler}) {
return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Card {cardNum} of {numberOfCard}</h5>
            <p>{flipped ? card.back : card.front}</p>
            <button type="button" className="btn btn-secondary" onClick={flippedHandler}>Flip</button>
            {flipped && <button type="button" className="btn btn-primary" onClick={nextHandler}>Next</button>}
        </div>
    </div>
)
}

export default Card;