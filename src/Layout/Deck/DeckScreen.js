import React from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function DeckScreen () {
const { deckId } = useParams();

return (
    <div>
        <nav arial-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" arial-current="page">React Router</li>
            </ol>
        </nav>
    </div>
)
}

export default DeckScreen;