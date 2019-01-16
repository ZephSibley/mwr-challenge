import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import normaliseStockData from "../tools/normaliseStockData";
//turn the chart into a subcomponent


const StockChart = ({stockData}) => {

    StockChart.PropTypes = {
        stockData: PropTypes.object.isRequired
    }

    let chartData = []
    normaliseStockData(stockData, chartData);

    return (
        <ResponsiveContainer width="90%" height={500} >
            <LineChart data={chartData} >
                <XAxis dataKey="date"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="4. close" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>
    ); 
};

export default StockChart;

/*let chartData = [];
    chartData.push(stockData["Time Series (Daily)"]) */