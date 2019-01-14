import React, {Component} from "react";

class StockSearch extends Component {

    handleChange = e => {
        this.props.triggerUpdate(e);
    }

    render() {
        let matches
            if (this.props.searchResults) {
                matches = this.props.searchResults.bestMatches.map(
                    (match) => 
                        <button id={match["1. symbol"]}> {match["2. name"]} ({match["1. symbol"]}) </button> 
                )
            }

            // Ternary operator checks if there are any errors, if yes then presents the message to the user, if no then renders the user interface
            return (
                <div>         
                    <label>
                        Which stock would you like to view? 
                        <input 
                            type="text" 
                            placeholder="Microsoft" 
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <div>
                        {matches}
                    </div>
                </div>
            );
    }
}

export default StockSearch;