import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
 
  return (
    <div className="App">
       
      <Header fname={"Doe"} lname={"Jane"} age={45} haircolor={"Black"}/>
      <Header fname={"Smith"} lname={"John"} age={88} haircolor={"Brown"}/>
        
      
    </div>
  );
}

export default App;
