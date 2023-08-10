import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { BrowserRouter as Route, Switch }  from "react-router-dom";

import Home from "./Home/home";
import DeckStudy from "./Deck/DeckStudy";
import CreateDeck from "./Deck/CreateDeck";
import DeckScreen from "./Deck/DeckScreen";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId/study">
            <DeckStudy />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="decks/:deckId">
            <DeckScreen />
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
