import React, { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        searchMatches: [],
        data: [],
        loaded: false,
        placeholder: "Loading..."
    }

    handleStockSelection = (event) => {
        fetch(this.props.endpoint + "function=SYMBOL_SEARCH&keywords=" + event.target.value + "&apikey=" + process.env.REACT_APP_API_KEY)
        .then(response => {
            if (response.status !== 200) {
                console.log("uh oh"); //set up placeholder/error message
            }
            return response.json();
        })
        .then(data =>  console.log(data)  /*this.setState({searchMatches: data})*/)
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

    /*componentDidMount() {
        this.fetchData();
    }*/

    render() {
        const { searchMatches, data, loaded, placeholder } = this.state;
        return (
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
                    {searchMatches.map((match) => <option key={match["1. symbol"]} value={match["1. symbol"]}>{match["2. name"]}</option>  )}
                </p>
            </div>
        );
        // If the get request was successful it returns the data to the render props, otherwise returns the placeholder (loading, or if error "something went wrong")
        //return loaded ? this.props.render(data) : <p>{placeholder}</p>;
    }

}

export default DataProvider;