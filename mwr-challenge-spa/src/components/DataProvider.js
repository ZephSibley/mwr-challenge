import React, { Component } from "react";
import PropTypes from "prop-types";

import apiFetch from "../tools/apiFetch";

class DataProvider extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        searchResults: null,
        errorMessage: "",
        data: [],
        loaded: false,
        placeholder: "Loading..."
    }

    handleStockSelection = (event) => {
        apiFetch(event.target.value, "SYMBOL_SEARCH")
        .then((data) => { this.setState({ searchResults: data }) })
        .catch((error) => { this.setState({ errorMessage: error }) })
    };

    //turn this into a module?
    fetchData = () => {
        fetch(this.props.endpoint)
        .then(response => {
            if (response.status !== 200) {
                return this.setState({ placeholder: "Something went wrong" });
            }
            return response.json();
        })
        .then(data => this.setState({ data: data, loaded: true }));
    }


    render() {
        const { searchResults, errorMessage, data, loaded, placeholder } = this.state;
        
        // Assigns the search results to html elements
        let matches
        if (searchResults) {
            matches = searchResults.bestMatches.map(
                (match) => 
                    <option key={match["1. symbol"]} value={match["1. symbol"]}> {match["2. name"]} ({match["1. symbol"]}) </option> 
            )
        }

        // Ternary operator checks if there are any errors, if yes then presents the message to the user, if no then renders the user interface
        return errorMessage ? <p>{errorMessage}</p> : (
            <div>
                <form>
                    <label>
                        Which stock would you like to view? 
                        <input 
                            type="text" 
                            placeholder="Microsoft" 
                            onChange={this.handleStockSelection}
                        />
                    </label>
                </form>
                <p>
                    {matches}
                </p>
            </div>
        );
        
        // If the get request was successful it returns the data to the render props, otherwise returns the placeholder (loading, or if error "something went wrong")
        //return loaded ? this.props.render(data) : <p>{placeholder}</p>;
    }

}

export default DataProvider;