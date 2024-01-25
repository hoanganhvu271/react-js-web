import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Vu"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Helo {name}</h1>
      </header>
    </div>
  );
}

export default App;
