import React from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteDeck } from "../../utils/api";
import CardList from "../Card/CardList";

function DeckScreen() {
const { deckId } = useParams();
const [deck, setDeck] = useState([]);
const [cards, setCards] = useState([]);
const {url} = useRouteMatch();

useEffect(() => {
    const abortController = new AbortController();
    async function fetchDeck() {
        const fetchedDeck = await readDeck(deckId, abortController.signal);
        setDeck(fetchedDeck);
        setCards(fetchedDeck.cards)
    }
    fetchDeck();
    return() => abortController.abort();
}, [deckId]);


const deleteHandler = async () => {
    const deleteConfirm = window.confirm("Delete this deck? \n You will not be able to recover it.");
    if (deleteConfirm) {
        await deleteDeck(deckId);
    }
}

return (
    <div>
       <nav><Link to="/">Home</Link> / {deck.name} </nav>
        <div>
            <h5>{deck.name}</h5>
            <p>{deck.description}</p>
            <Link to={`${url}/edit`}><button>Edit</button></Link>
            <Link to={`${url}/study`}><button>Study</button></Link>
            <Link to={`${url}/cards/new`}><button>Add Cards</button></Link>
            <button onClick={deleteHandler}>Delete</button>
        </div>
        <div>
            <h2>Cards</h2>
            <CardList cards={cards} />
        </div>        
    </div>
)
}

export default DeckScreen;