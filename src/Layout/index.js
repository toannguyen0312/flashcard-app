import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route }  from "react-router-dom";

import Home from "./Home/home";
import DeckStudy from "./Deck/DeckStudy";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Router>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId/study">
            <DeckStudy />
          </Route>
        </Router>
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
