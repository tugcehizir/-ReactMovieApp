import React from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/">
            <SearchBar />
            <MovieList />
          </Route>
          <Route path="/detay" component={MovieDetail}>
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
