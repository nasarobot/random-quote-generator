import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState("")
  async function getQuote(){
    await fetch('https://api.quotable.io/random').then(
      response => response.json()).then(
        (quote) => {
          setData(quote);
          console.log("called");
        }
      )
  }
  useEffect(() => {
    getQuote();
  }, []);



  
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className='quote-container'>
            <p>{data.content}</p>
            <span>~{data.author}</span>
          </div>
          <button id='b1' onClick={getQuote}>Get Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
