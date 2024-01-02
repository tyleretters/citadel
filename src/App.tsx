import React from 'react'
import Releases from './components/Releases'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Citadel</h1>
        <em>An Interactive Discography of Tyler Etters</em>
      </div>
      <Releases />
    </div>
  );
}

export default App;
