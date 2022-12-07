import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard fname={"Doe"} lname={"Jane"} age={45} haircolor={"Black"}/>
      <PersonCard fname={"Smith"} lname={"John"} age={88} haircolor={"Brown"}/>
      <PersonCard fname={"Fillmore"} lname={"Millard"} age={50} haircolor={"Brown"}/>
      <PersonCard fname={"Smith"} lname={"Maria"} age={62} haircolor={"Brown"}/>      
    </div>
  );
}

export default App;
