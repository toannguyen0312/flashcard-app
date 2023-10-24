import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";
import { Link } from "react-router-dom";

function DeckCard({deck}) {
const history = useHistory();

const handleDelete = async(deckId) =>{
    const result = window.confirm("Are you sure you want to delete this deck?");
    if(result){
        deleteDeck(deckId).then(history.go("/"))
    }       
}

return (
<div className="card shadow p-3 bg-white rounded" style={{marginBottom:"10px"}} >
    <div className="card-body">
        <h5 className="card-title">{deck.name}</h5>
        <p className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</p>
        <p className="card-text">{deck.description}</p>
        <div style={{display:"flex", flexDirection: "row", justifyContent:"space-between"}}>
            <div>
                <Link to={`/decks/${deck.id}`}><button type="button" className="btn btn-secondary shadow">View</button></Link>
                <Link to={`/decks/${deck.id}/study`}><button type="button" className="btn btn-primary shadow" style={{marginLeft:"7px"}}>Study</button></Link>
            </div>
            <div>
                <button type="button" className="btn btn-danger shadow" onClick={() => handleDelete(deck.id)}>Delete</button>
            </div>
        </div>
    </div>
</div>
);
}

export default DeckCard;