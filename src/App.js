import React from 'react';
import './App.css';
import { Link, Route } from 'wouter';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import Home from './pages/Home';
import SearchForm from './components/SearchForm';
import {GifsContextProvider} from './context/GifsContext';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className='App-logo'>
            <img src="/logo192.png" alt="Giffy logo" />
          </figure>
        </Link>
        <SearchForm />
        <GifsContextProvider>
        <Route 
          component={Home}
          path="/"
        />
        <Route 
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route 
          component={Details}
          path="/gif/:id"
        />
        </GifsContextProvider>
      </section>
    </div>
  ); 
}

export default App;
