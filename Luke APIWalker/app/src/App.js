  import logo from './logo.svg';
  import './App.css';
  import React ,{useState, useEffect} from 'react'
  import {Router} from '@reach/router';
  import List from './components/List';
  import Person from './components/Person';
  import Err from './components/Err';


  function App() {
    return (
      <div className="App">
        <List/>
      <Router>
      <Person path="/:type/:id" />
      <Err path="/error"/>
      </Router>
      </div>
    );
  }


  export default App;
