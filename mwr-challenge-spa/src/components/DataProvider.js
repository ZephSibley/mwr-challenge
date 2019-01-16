import React, { Component } from "react";
import apiFetch from "../tools/apiFetch";
import debounce from "../tools/debounce";
import normaliseStockData from "../tools/normaliseStockData";

class DataProvider extends Component {

    state = {
        searchResults: null,
        errorMessage: "",
        chartData: null,
        chartDataLoaded: false,
        stockSelection: "",
    }

    handleStockSearch = (event) => {
        debounce(  //On a timer to prevent overcalling the API
            apiFetch("SYMBOL_SEARCH&keywords=", event.target.value)
            .then((data) => { this.setState({ searchResults: data }) })
            .catch((error) => { this.setState({ errorMessage: error }) })
        , 15000);
    };

    handleStockSelection = (event) => {
        this.setState({stockSelection: event.target.id})
        apiFetch("TIME_SERIES_DAILY&symbol=", event.target.id)
        .then((data) => { 
            let chartData = [];
            normaliseStockData(data, chartData)
            this.setState({ chartData: chartData, chartDataLoaded: true }) 
        })
        .catch((error) => { this.setState({ errorMessage: error }) });   
    };


    render() {
        const { searchResults, chartData, chartDataLoaded, stockSelection, errorMessage} = this.state;
        
        // Assigns the search results to html elements
        let matches
        if (searchResults) {
            matches = searchResults.bestMatches.map(
                (match) => 
                    <button 
                        id={match["1. symbol"]} 
                        key={match["1. symbol"]}  // Unfortunately there are no entirely unique keys to use, but this is closest option.
                        onClick={this.handleStockSelection} 
                    > 
                        {match["2. name"]} ({match["1. symbol"]}) 
                    </button> 
            )
        }

        // Once a selection is made and chart data is loaded, will render StockChart as a renderprop (passing in the data)
        return chartDataLoaded ? this.props.render(chartData, stockSelection) : (
            <div className="search-container" >
                <p>Which stock would you like to view? </p>
                <input 
                    type="text" 
                    placeholder="Microsoft" 
                    onChange={this.handleStockSearch}
                />
                {errorMessage ? <p>{errorMessage}</p> : matches}
            </div>
        );
    }

}

export default DataProvider;