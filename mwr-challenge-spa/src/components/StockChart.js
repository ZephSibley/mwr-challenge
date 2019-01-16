import React, {Component} from "react";
import PropTypes from "prop-types";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


class StockChart extends Component {

    static propTypes = {
        chartData: PropTypes.array.isRequired,
        stockSelection: PropTypes.string.isRequired
    }

    state = {
        timeFrameSpecified: false,
        newTimeFrame: []
    }

    viewSelection = (event) => {
        if (!event.target.value) {
            this.setState({timeFrameSpecified:false});
        } else {
            let timeSelection = this.props.chartData.slice(event.target.value) 
            console.log(timeSelection)
            this.setState({ timeFrameSpecified: true, newTimeFrame: timeSelection })
        }
        // The timeframes are in market working days, rather than strictly chronological.
    }

    render() {
        var {timeFrameSpecified, newTimeFrame} = this.state;
        var {chartData, stockSelection} = this.props;

        return (
            <div className="stock-chart-container" >
                <ResponsiveContainer width="80%" height={600} >
                    <LineChart data={timeFrameSpecified ? newTimeFrame : chartData} > 
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
                <div>
                    <button value="" onClick={this.viewSelection}>Full View</button>
                    <button value="-30" onClick={this.viewSelection}>30 Day View</button>
                    <button value="-10" onClick={this.viewSelection}>10 Day View</button>
                </div>
            </div>
        ) 
        
    };
};

export default StockChart;

/*let chartData = [];
    chartData.push(stockData["Time Series (Daily)"]) */

    //name={stockData["Meta Data"]["2. Symbol"]} 

    //timeFrameSpecified ? <p>hello</p> : 