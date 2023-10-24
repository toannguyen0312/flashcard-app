import React from "react";
import { readDeck, updateDeck } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function EditDeck() {
const [deck, setDeck] = useState({name:"", description:""});
const { deckId } = useParams();
const history = useHistory();

useEffect (() => {
    async function loadDeck() {
        try {
            const response = await readDeck(deckId);
            setDeck(response);}  catch (error) {
            console.error(error);
        }
    }
    loadDeck();
}, [deckId]);

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

return (
<div>
    <nav arial-label="bread-crumb" className="shadow">
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
        <div className="form-group">
            <label htmlFor="name">
                Name
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"                
                    onChange={handleChange}
                    value={deck.name}
                    className="form-control shadow"
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
                    className="form-control shadow"
                />
            </label>
        </div>
    </form>
    <button type="button" className="btn btn-secondary shadow" onClick={() => history.push("/")}>Cancel</button>
    <button type="button" className="btn btn-primary shadow" onClick={handleSubmit} style={{marginLeft:"7px"}}>Submit</button>
</div>
)
}

export default EditDeck;