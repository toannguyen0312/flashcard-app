import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { listDecks } from "../../utils/api";

import DeckList from "../Deck/DeckList";

function Home() {
const history = useHistory();
const [deck, setDeck]  = useState([]);

useEffect(() => {
    async function fetchDecks(){
        const response = await listDecks();
        setDeck(response);
    }
    fetchDecks();
}, [])

return (
<div>
    <button style={{marginBottom:"10px"}} type="button" className="btn btn-secondary shadow" onClick={() => history.push("/decks/new")}>Create Card</button>
    <DeckList deck={deck}/>
</div>
)
}

export default Home;