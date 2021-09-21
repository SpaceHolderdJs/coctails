import React, { createContext, useCallback, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import CocktailSearch from "./components/CoktailSearch";
import SearchIngridient from "./components/SearchIngridient";
import CocktailDetails from "./components/CocktailDetails";
import Main from "./components/Main";

export const Context = createContext();

function App() {
  const [loading, setLoading] = useState(false);

  const getData = useCallback((param, stateSetter) => {
    setLoading(true);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${param.name}=${param.value}&key=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        stateSetter(data.drinks || data.ingredients);
      });
  }, []);

  return (
    <Router>
      <Context.Provider value={{ getData }}>
        <div className="App">
          <header>
            <Link to="/">Main</Link>
            <Link to="/cocktailSearch">Cocktails</Link>
            <Link to="/searchIngridient">Ingridients</Link>
          </header>
          {loading && <h1>Loading</h1>}
        </div>

        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/cocktailSearch">
            <CocktailSearch />
          </Route>
          <Route path="/searchIngridient">
            <SearchIngridient />
          </Route>
          <Route path="/cocktailDetails/:id">
            <CocktailDetails />
          </Route>
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;
