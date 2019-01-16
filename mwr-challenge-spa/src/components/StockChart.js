import React, {Component} from "react";
import PropTypes from "prop-types";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


class StockChart extends Component {

    static propTypes = {
        chartData: PropTypes.array.isRequired,
        stockSelection: PropTypes.string.isRequired
    }

    /*state = {
        chartData: []
    }*/

    render() {
        var {chartData, stockSelection} = this.props;
        /*
        let chartData = []
        normaliseStockData(stockData, chartData);
        */
        function viewSelection(event) {
            chartData = chartData.slice(event.target.value)
            console.log(chartData)
            return chartData
        }
        console.log(chartData)

        return (
            <div>
                <ResponsiveContainer width="90%" height={500} >
                    <LineChart data={chartData} >
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line 
                            name={stockSelection} 
                            dataKey="4. close" 
                            type="monotone" 
                            stroke="#8884d8" 
                            activeDot={{r: 1}}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <button value="" onClick={viewSelection}>100 Day View</button>
                <button value="-30" onClick={viewSelection} >30 Day View</button>
            </div>
        )
    };
};

export default StockChart;

/*let chartData = [];
    chartData.push(stockData["Time Series (Daily)"]) */

    //name={stockData["Meta Data"]["2. Symbol"]} 