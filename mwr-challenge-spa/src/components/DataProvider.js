import React, { Component } from "react";
import apiFetch from "../tools/apiFetch";
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
        apiFetch("SYMBOL_SEARCH&keywords=", event.target.value)
        .then((data) => { this.setState({ searchResults: data }) })
        .catch((error) => { this.setState({ errorMessage: error }) })
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

        // Ternary operator checks if there are any errors, if yes then presents the message to the user, if no then renders the user interface
        return chartDataLoaded ? this.props.render(chartData, stockSelection) : (
            <div>
                <label>
                    Which stock would you like to view? 
                    <input 
                        type="text" 
                        placeholder="Microsoft" 
                        onChange={this.handleStockSearch}
                    />
                </label>
                <div>
                    {errorMessage ? <p>{errorMessage}</p> : matches}
                </div>
            </div>
        );
        
        // If the get request was successful it returns the data to the render props, otherwise returns the placeholder (loading, or if error "something went wrong")
        //return loaded ? this.props.render(data) : <p>{placeholder}</p>;
    }

}

export default DataProvider;