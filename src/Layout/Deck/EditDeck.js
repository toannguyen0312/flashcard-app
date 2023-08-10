import React, { useEffect, useState } from "react";
import { readCard, readDeck, updateDeck } from "../../utils/api";
import { useParams, Link } from "react-router-dom";

export default function EditDeck() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({name: "", description: ""});

    useEffect(() => {
        async function fetchDeck() {
            try{
                const fetchedDeck = await readDeck(deckId);
                setDeck(fetchedDeck);
            } catch (error) {
                console.error(error);
            }
        } fetchDeck();

    },[deckId])

    const changeHandler = ({target}) => {
        setDeck({
            ...deck,
            [target.name]: target.value,
        })
    }

    //on submit call updateDeck
    const submitHandler = async (event) => {
        event.preventDefault();
        await updateDeck(deck);
    }

    return (
        <div>
            <nav>
                <Link to="/">Home</Link> / {deck.name} / Edit Deck
            </nav>
            <h2>Edit Deck</h2>
            <form>
                <div>
                    {/* inputs are prefilled with deck data and can be updated */}
                    <label>Name</label>
                    <input
                    id="name"
                    name="name"
                    value={deck.name}
                    onChange={changeHandler}
                    ></input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                    id="description"
                    name="description"
                    value={deck.description}
                    onChange={changeHandler}
                    >
                    </textarea>
                </div>
            </form>
            <Link to={`/decks/${deckId}`}><button style={{backgroundColor: "gray"}}>Cancel</button></Link>
            <button  onClick={submitHandler}>Submit</button>
        </div>
    )
}