import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//turn the chart into a subcomponent


const StockGraph = ({stockData}) => {

    StockGraph.PropTypes = {
        stockData: PropTypes.object.isRequired
    }

    let chartData = []
    console.log(stockData)
    let dates = Object.keys(stockData["Time Series (Daily)"]);
    for(let i=0; i<dates.length; i++) {
        chartData.push(stockData["Time Series (Daily)"][dates[i]]);
        chartData[i].date = dates[i];
    }

    console.log(chartData)

    return (
        <LineChart width={1500} height={300} data={chartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="date"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="4. close" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    ); 
};

export default StockGraph;

/*let chartData = [];
    chartData.push(stockData["Time Series (Daily)"]) */