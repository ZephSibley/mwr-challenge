import React, { Component } from 'react';
import './App.css';
import DataProvider from './components/DataProvider';

class App extends Component {
  render() {
    return (
      <DataProvider endpoint="https://www.alphavantage.co/query?" 
        render={(data) => (
          <p>success!</p>
        )}
      />
    );
  }
}

export default App;
