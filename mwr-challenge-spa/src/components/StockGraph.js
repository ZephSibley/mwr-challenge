import React from "react";
import PropTypes from "prop-types";


const StockGraph = (stockData) => {

    StockGraph.PropTypes = {
        stockData: PropTypes.object.isRequired
    }

    return !stockData ? <p>Nothing to show</p> :
        <div>
            <p>Success!</p>
        </div>
}

export default StockGraph;