import React from "react";
import { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";
import {useHistory, Link } from "react-router-dom";

import Card from "../Card/Card";

function DeckStudy() {
const { deckId } = useParams();
const [deck, setDeck] = useState([]);
const [cards, setCards] = useState([]);
const [card, setCard] = useState(1);
const [flipped, setFlipped] = useState(false);
const [numberOfCard, setNumberOfCard] = useState(0);

const history = useHistory();


useEffect (() => {
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

return (
    <div>
        <nav>
            <Link to="/">Home</Link> / {deck.name} / Study
        </nav>
    </div>
)
}

export default DeckStudy;