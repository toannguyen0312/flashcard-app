import React from "react";
import CardScreen from "./CardScreen";

function CardList ({cards}) {

    const cardList = cards.map((card) => <CardScreen key={card.id} card={card} id={card.id}/>)
    return (
        <div>
            {/* return cards individually */}
            {cardList}
        </div>
    )
}

export default CardList;