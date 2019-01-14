import React, { Component } from 'react';
import './App.css';
import DataProvider from './components/DataProvider';
import StockGraph from './components/StockGraph';

class App extends Component {
  render() {
    return (
      <DataProvider 
        render={(stockData) => (
          <StockGraph stockData={stockData} />
        )}
      />
    );
  }
}

export default App;
