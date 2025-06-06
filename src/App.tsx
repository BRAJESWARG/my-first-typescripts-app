// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BlueButton from './components/BlueButton';
import GreenButton from './components/GreenButton';
import PurpleButton from './components/PurpleButton';
import RedButton from './components/RedButton';
import YellowButton from './components/YellowButton';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <RedButton />
        <BlueButton />
        <GreenButton />
        <PurpleButton />
        <YellowButton />
      </div>

    </div>
  );
}

export default App;
