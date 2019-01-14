import React, { Component } from "react";
import PropTypes from "prop-types";

import apiFetch from "../tools/apiFetch";

class DataProvider extends Component {

    state = {
        searchResults: null,
        errorMessage: "",
        stockData: null,
        stockDataLoaded: false,
        placeholder: "Loading..."
    }

    handleStockSearch = (event) => {
        apiFetch("SYMBOL_SEARCH&keywords=", event.target.value)
        .then((data) => { this.setState({ searchResults: data }) })
        .catch((error) => { this.setState({ errorMessage: error }) })
    };

    handleStockSelection = (event) => {
        apiFetch("TIME_SERIES_DAILY&symbol=", event.target.id)
        .then((data) => { this.setState({ stockData: data, stockDataLoaded: true }) })
        .catch((error) => { this.setState({ errorMessage: error }) });
    };


    render() {
        const { searchResults, errorMessage, stockData, stockDataLoaded, placeholder } = this.state;
        
        // Assigns the search results to html elements
        let matches
        if (searchResults) {
            matches = searchResults.bestMatches.map(
                (match) => 
                    <button id={match["1. symbol"]} onClick={this.handleStockSelection} > 
                        {match["2. name"]} ({match["1. symbol"]}) 
                    </button> 
            )
        }

        // Ternary operator checks if there are any errors, if yes then presents the message to the user, if no then renders the user interface
        return stockDataLoaded ? this.props.render(stockData) : (
            <div>
                <form>
                    <label>
                        Which stock would you like to view? 
                        <input 
                            type="text" 
                            placeholder="Microsoft" 
                            onChange={this.handleStockSearch}
                        />
                    </label>
                </form>
                <p>{matches}</p>  
            </div>
        );
        
        // If the get request was successful it returns the data to the render props, otherwise returns the placeholder (loading, or if error "something went wrong")
        //return loaded ? this.props.render(data) : <p>{placeholder}</p>;
    }

}

export default DataProvider;