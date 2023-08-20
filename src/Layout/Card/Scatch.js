import React from "react";
import { readCard, readDeck, updateCard } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function EditCard() {
const [card, setCard] = useState({front:"", back:""});
const { deckId } = useParams();
const { cardId } = useParams();
const [deck, setDeck] = useState([]);

useEffect(() => {
    async function loadDeck() {
        const fetchDeck = await readDeck(deckId);
        setDeck(fetchDeck);
    }

    async function loadCard() {
        const fetchCard = await readCard(cardId);
        setCard(fetchCard);
    }
    loadDeck();
    loadCard();
}, [deckId, cardId]);

const handleChange = ({ target }) => {
    setCard({
        ...card,
        [target.name]: target.value,
    })
}

const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCard(card);
}

return (
    <div>
        <nav aria-label="bread-crumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`decks/${deckId}`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page"> Edit Card {card.id}</li>
            </ol>
        </nav>
    </div>
)

}

export default EditCard;