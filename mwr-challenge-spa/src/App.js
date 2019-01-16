import React, { Component } from 'react';
import './App.css';
import DataProvider from './components/DataProvider';
import StockChart from './components/StockChart';

class App extends Component {
  render() {
    return (
      <DataProvider 
        render={(chartData, stockSelection) => (
          <StockChart chartData={chartData} stockSelection={stockSelection} />
        )}
      />
    );
  }
}

export default App;
