import React from "react";
import { useState, useEffect } from "react";
import { readDeck, readCard, deleteDeck } from "../../utils/api";
import { useParams, Link, useHistory } from "react-router-dom";
import CardScreen from "../Card/CardScreen";

function DeckScreen() {
const { deckId } = useParams();
const [deck, setDeck] = useState([]);
const [cards, setCards] = useState([]);
const history = useHistory(); 

useEffect(() => {
    async function loadDeck() {
        const response = await readDeck(deckId);
        setDeck(response);
        setCards(response.cards);
    }
    loadDeck()
},[deckId]);

const handleDelete = async(deckId) =>{
    const result = window.confirm("Delete this card? \n You will not able to recover it.");
    if(result){
        deleteDeck(deckId).then(history.go("/"))
    }       
}

return (
    <div>
        <nav arial-label="bread-crumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" arial-current="page">{deck.name}</li>
            </ol>
        </nav>
        <h5>{deck.name}</h5>
        <p>{deck.description}</p>
        <Link to={`/decks/${deckId}/edit`}><button type="button" className="btn btn-secondary">Edit</button></Link>
        <Link to={`/decks/${deckId}/study`}><button type="button" className="btn btn-primary">Study</button></Link>
        <Link to={`/decks/${deckId}/cards/new`}><button type="button" className="btn btn-primary">Add Cards</button></Link>
        <button type="button" className="btn btn-danger">Delete</button>
        <h3>Cards </h3>
        <CardScreen cards={cards}/>
    </div>
)
}

export default DeckScreen;