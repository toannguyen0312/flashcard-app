import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { createDeck } from "../../utils/api";

function CreateDeck() {
const history = useHistory();

const initialFormState = {
    name: "",
    description: "",
};

const [formData, setFormData] = useState({...initialFormState})
const handleChange = ({ target }) => {
    setFormData({
        ...formData,
        [target.name]: target.value,
    });
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const newDeck = await createDeck(formData);
    history.push(`/decks/${newDeck.id}`)
}

return (
    <div>
        <nav arial-label="bread-crumb" className="shadow">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" arial-current="page">Create Deck</li>
            </ol>
        </nav>
        <h1>Create Deck</h1>
        <form>
            <div className="form-group">
                <label htmlFor="name">
                    Name
                    <br />
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        placeholder="Deck Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control shadow size lg"
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="description">
                    Description
                    <br />
                    <textarea 
                        id="description" 
                        name="description" 
                        placeholder="Brief description of the deck"
                        value={formData.description}
                        onChange={handleChange} 
                        className="form-control shadow"
                    />
                </label>
            </div>
        </form>
        <button type="button" className="btn btn-secondary" onClick={() => history.push("/")}>Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit} style={{marginLeft:"7px"}}>Submit</button>
    </div>
)
}

export default CreateDeck;