import React from "react";
import CardList from "./CardList";

function CardScreen({ cards }) {
const listCards = cards.map((card) => <CardList key={card.id} cards={card} id={card.id} />)
return(
<div>
    {listCards}
</div>
)
}

export default CardScreen;