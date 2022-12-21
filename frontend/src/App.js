import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {

  const connection_test = () => {
    axios.get('http://localhost:8000/api/v1').then((res)=>{
      console.log(res.data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
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
      <button onClick={()=>{connection_test()}}>서버통신테스트</button>
    </div>
  );
}

export default App;
