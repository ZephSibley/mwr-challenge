
// Takes required API parameters and a keyword (e.g. "TIME_SERIES_DAILY&symbol=" and "MSFT") and builds them into a query
// See https://www.alphavantage.co/documentation/ for further details

function apiFetch (apiFunction, keywords) {
    return new Promise(function (resolve, reject) {
            fetch("https://www.alphavantage.co/query?function=" + apiFunction + keywords + "&apikey=" + process.env.REACT_APP_API_KEY)
                .then(response => {
                    console.log(response.status)
                    if (response.status !== 200) {
                        return "Something went wrong with the API"
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.Note) { // The API responds with 200 instead of the appropriate response code for call limiting, so as a workaround this detects the response note
                        reject("Sorry, we've hit the API call limit, please refresh and try again in a minute")
                    } else if (data["Error Message"]) { // Again, the API still responds with 200 even if you make an invalid call
                        console.log(data)// Pass    Currently the program submits a blank value when you delete what's already there, which results in the error message, might look for a more sensible approach to handle this
                    } else {
                        resolve(data);
                    }
                })
   });
}

export default apiFetch;