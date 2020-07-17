import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './components/cards/CardComponent.js';
import MainHeader from './components/header/MainHeader.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainHeader/>
        <div className="container">
          <CardComponent />
        </div>
      </div>
    );
  }
}

export default App;
