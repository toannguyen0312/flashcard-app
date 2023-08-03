import React from "react";
import DeckCard from "./DeckCard";

function DeckList({deck}) {
    
const listDeck = deck.map((deck) => <DeckCard key={deck.id} deck={deck} />);

return (
    <div>
        {listDeck}
    </div>
)
}

export default DeckList;