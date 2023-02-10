import React from "react";
import { deleteCard } from "../utils/api/index";

function CardDelete({cardId, deckId}) {

    
    function handleCardDelete() {
        const deleteCardPrompt = window.confirm("Delete this Card? You will not be able to recover it.") //displays the delete message the user will see

    if(deleteCardPrompt) {
        deleteCard(cardId)
        .then(window.location.reload()) 
    }
}

    
    return (
        <button className="btn btn-danger float-right" onClick={handleCardDelete}>
            <span className="oi oi-trash"></span>
        </button>
    )
}

export default CardDelete;