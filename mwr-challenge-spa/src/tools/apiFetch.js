import debounce from './debounce';

//

function apiFetch (apiFunction, keywords) {
    return new Promise(function (resolve, reject) {
        //On a timer to prevent overcalling the API
        debounce( 
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
                        reject("Sorry, we've hit the API call limit, try again in a minute")
                    } else if (data["Error Message"]) { // Again, the API still responds with 200 even if you make an invalid call
                        console.log(data)// Pass    {currently the program submits a blank value when you delete what's already there, which results in the error message, might look for a more sensible approach to handle this}
                    } else {
                        resolve(data);
                    }
                })
        , 15000);
   });
}

export default apiFetch;