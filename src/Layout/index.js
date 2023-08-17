import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch }  from "react-router-dom";

import Home from "./Home/home";
import DeckStudy from "./Deck/DeckStudy";
import CreateDeck from "./Deck/CreateDeck";
import DeckScreen from "./Deck/DeckScreen";
import EditDeck from "./Deck/EditDeck";
import AddCards from "./Card/AddCard";
import EditCard from "./Card/EditCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId/study">
            <DeckStudy />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckScreen />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCards />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>        
      </div>
    </>
  );
}

export default Layout;
