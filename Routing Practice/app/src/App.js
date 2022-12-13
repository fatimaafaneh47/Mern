import logo from './logo.svg';
import React from 'react';
import './App.css';
import Link from './components/Link';
import ListofComponents from './components/ListofComponents';
import Color from './components/Color';
import {Router} from '@reach/router';


function App() {
  return (
    <div className="App">
      <Link></Link>
    
      <Router>
            <Link path="/home"></Link>
            <ListofComponents path=":variable"></ListofComponents>
            <Color path="/:variable/:variable1/:variable2"></Color>
           
        </Router>
      
    </div>
  );
}

export default App;
