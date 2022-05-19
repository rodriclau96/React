import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
//  return(
  //  <div className='App'>
    //  <Navbar />
      //<ItemListContainer greeting= "Hola coder" />
    //</div>
  //)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting= "Hola coder"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
