import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//turn the chart into a subcomponent


const StockGraph = (stockData) => {

    StockGraph.PropTypes = {
        stockData: PropTypes.object.isRequired
    }

    let graphData = []
    console.log(stockData)
    let dates = Object.keys(stockData["Time Series (Daily)"]);
    for(let i=0; i<dates.length; i++) {
        graphData.push(stockData["Time Series (Daily)"][dates[i]]);
    }

    return (
        <ResponsiveContainer>
            <LineChart  >
                <XAxis />
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line dataKey="close" connectNulls={true} type="monotone" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    ); 
};

export default StockGraph;

/*let graphData = [];
    graphData.push(stockData["Time Series (Daily)"]) */