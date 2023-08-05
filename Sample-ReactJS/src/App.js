import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Component1 from "./components/Component1"
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  return (
    <div className="App">
      <h1>Component 1</h1>
      <Component1></Component1>
      <hr></hr>
      <h1>Component 2</h1>
      <Component2></Component2>
      <hr></hr>
      <h1>Component 3</h1>
      <Component3></Component3>
      <hr></hr>
    </div>
  );
}

export default App;
