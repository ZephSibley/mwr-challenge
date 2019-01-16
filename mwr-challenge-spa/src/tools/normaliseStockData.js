
function normaliseStockData (stockData, chartData) {
    
    // Example data: { "Meta Data": {(METADATA)}, "Time Series (Daily)": { "2019-01-15": {"1. open": "102.5100", "2. high": "105.0500", "3. low": "101.8800", "4. close": "105.0100","5. volume": "31537108"}, "2019-01-15":...
    let dates = Object.keys(stockData["Time Series (Daily)"]); 

    for(let i=0; i<dates.length; i++) {
        chartData.push(stockData["Time Series (Daily)"][dates[i]]); // pushes each object by iterating through the dates array, calling each key 
        chartData[i].date = dates[i]; // Puts each datestamp key into it's corresponding object
    };
    chartData.reverse(); // Now latest to earliest
    return chartData
};

export default normaliseStockData;