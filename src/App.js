import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import ListBeers from './components/ListBeers';
import BeerDetails from './components/BeerDetails';
import NewBeerForm from './components/NewBeerForm';

function App() {
  return (
    <div className="App">
      <Route component={Header} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/random-beer' component={() => <BeerDetails random={true} />} />
        <Route path='/beers/:id' component={BeerDetails} />
        <Route path='/beers' component={ListBeers} />
        <Route path='/new-beer' component={NewBeerForm} />
      </Switch>
    </div>
  );
}

export default App;
