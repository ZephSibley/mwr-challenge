import React, { Component } from 'react';
import './App.css';
import DataProvider from './components/DataProvider';
import StockChart from './components/StockChart';

class App extends Component {
  render() {
    return (
      <DataProvider 
        render={(stockData) => (
          <StockChart stockData={stockData} />
        )}
      />
    );
  }
}

export default App;
