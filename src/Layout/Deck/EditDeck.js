import React from "react";
import { readDeck, updateDeck } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function EditDeck() {
const [deck, setDeck] = useState({name:"", description:""});
const { deckId } = useParams();
const history = useHistory();


const handleChange = ({ target }) => {
    setDeck({
        ...deck,
        [target.name]: target.value,
    })
}
const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDeck(deck);
}

useEffect (() => {
    async function loadDeck() {
        const response = await readDeck(deckId);
        setDeck(response);
    }
    loadDeck();
}, [deckId]);

return (
<div>
    <nav arial-label="bread-crumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
                <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
        </ol>
    </nav>
    <h1>Edit Deck</h1>
    <form>
        <label htmlFor="name">
            Name
            <br />
            <input
                type="text"
                id="name"
                name="name"
                placeholder={deck.name}
                value={deck.name}
                onChange={handleChange}
            />
        </label>
        <br />
        <label htmlFor="description">
            Description
            <br />
            <textarea
                id="description"
                name="description"
                placeholder={deck.description}
                value={deck.description}
                onChange={handleChange}
            />
        </label>
    </form>
    <button type="button" className="btn btn-secondary" onClick={() => history.push("/")}>Cancel</button>
    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</div>
)
}

export default EditDeck;