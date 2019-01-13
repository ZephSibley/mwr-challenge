import React, { Component } from "react";
import PropTypes from "prop-types";

import debounce from "../tools/debounce";

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
        
        event.persist()
        debounce( //On a timer to prevent overcalling the API
            fetch(this.props.endpoint + "function=SYMBOL_SEARCH&keywords=" + event.target.value + "&apikey=" + process.env.REACT_APP_API_KEY)
                .then(response => {
                    console.log(response.status)
                    if (response.status !== 200) {
                        this.setState({ errorMessage: "Something went wrong with the API" })
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.Note) { // The API responds with 200 instead of the appropriate response code for call limiting, so as a workaround this detects the response note
                        this.setState({ errorMessage: "Sorry, we've hit the API call limit, try again in a minute" })
                    } else if (data["Error Message"]) { // Again, the API still responds with 200 even if you make an invalid call
                        // Pass    {currently the program submits a blank value when you delete what's already there, which results in the error message, might look for a more sensible approach to handle this}
                    } else {
                    this.setState({ searchResults: data });
                    }
                })
        , 15000);
    }

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