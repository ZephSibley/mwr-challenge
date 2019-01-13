import React, { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
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

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const { data, loaded, placeholder } = this.state;

        // If the get request was successful it returns the data to the render props, otherwise returns the placeholder (loading, or if error "something went wrong")
        return loaded ? this.props.render(data) : <p>{placeholder}</p>;
    }

}

export default DataProvider;