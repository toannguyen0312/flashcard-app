import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeckCard({deck}) {
const history = useHistory();

const handleDelete = async(deckId) =>{
    const result = window.confirm("Are you sure you want to delete this deck?");
    if(result){
        deleteDeck(deckId).then(history.go("/"))
    }       
}

return (
<div className="card">
    <div className="card-body">
        <h5 className="card-title">{deck.name}</h5>
        <p className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</p>
        <p className="card-text">{deck.description}</p>
        <button type="button" className="btn btn-secondary" onClick={() => history.push(`/decks/${deck.id}`)}>View</button>
        <button type="button" className="btn btn-primary" onClick={() => history.push(`/decks/${deck.id}/study`)}>Study</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(deck.id)}>Delete</button>
    </div>
</div>
);
}

export default DeckCard;