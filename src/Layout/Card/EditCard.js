import React from "react";
import { readCard, readDeck, updateCard } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function EditCard() {
const [card, setCard] = useState({front:"", back:""});
const { deckId } = useParams();
const { cardId } = useParams();
const [deck, setDeck] = useState([]);

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

return (
    <div>
        <nav aria-label="bread-crumb" className="shadow">
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
        <h2>{deck.name}: Add Card</h2>
        <form>
            <div className="form-group">
                <label htmlFor="frontcard">
                    Front
                    <br />
                    <textarea
                        className="form-control shadow"
                        id="frontcard"
                        name="frontcard"
                        placeholder="Front side of card"
                        onChange={handleChange}
                        value={card.front}                        
                    />
                </label>
                <br />
                <label htmlFor="backcard">
                    Back
                    <br />
                    <textarea
                        className="form-control shadow"
                        id="backcard"
                        name="backcard"
                        placeholder="Back side of card"
                        value={card.back}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </form>
        <button type="button" className="btn btn-primary shadow" onClick={handleSubmit}>Save</button>
    </div>
)

}

export default EditCard;