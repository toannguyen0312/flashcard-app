import React from "react";
import { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";

import Card from "../Card/Card";

function DeckStudy() {
const { deckId } = useParams();
const [deck, setDeck] = useState([]);
const [cards, setCards] = useState([]);
const [card, setCard] = useState(0);
const [flipped, setFlipped] = useState(false);
const [numberOfCard, setNumberOfCard] = useState(0);
const [cardNum, setCardNum] = useState(1);

const history = useHistory();


useEffect(() => {
    async function loadDeck() {
        try {
            const response = await readDeck( deckId );
            setDeck(response);
            setCards(response.cards);
            setNumberOfCard(response.cards.length);
            setCard(response.cards[0]);            
        } catch (error) {
            console.error(error);
        }
    }
    loadDeck();
}, [deckId]);

const flippedHandler = () => {
    setFlipped(!flipped);
}

const nextHandler = () => {
    setFlipped(!flipped);
    if(cardNum !== numberOfCard) {
        setCardNum(cardNum + 1);
        setCard(cards[cardNum]);
    } else {
        const restartDeck = window.confirm("Restart cards? \n Click 'cancel to return to the home page");
        if(!restartDeck) {
            history.push("/");
        } else {
            setCardNum(1);
            setCard(cards[0]);
        }
    }
}

return (
    <div>
        <nav arial-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item active" arial-current="page">Study</li>
            </ol>
        </nav>
        <h2>Study: {deck.name}</h2>
        <div>
            {numberOfCard <= 2? (
                <div>
                    <h5>Not enough cards.</h5>
                    <p>You need at least 3 cards to study. There are {numberOfCard} cards in this deck</p>
                    <button type="button" className="btn btn-secondary" onClick={() => history.push(`/decks/${deck.id}/cards/new`)}>Add Cards</button>
                </div>
            ): (
                <Card  card={card} numberOfCard={numberOfCard} cardNum={cardNum} flipped={flipped} flippedHandler={flippedHandler} nextHandler={nextHandler}/>
            )}
        </div>
    </div>
)
}

export default DeckStudy;