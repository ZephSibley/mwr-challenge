# MWR Challenge SPA


I approached this challenge with the same mindset that I would approach a commercial project with the same requirements. 

I gather a software developer needs to find a middle ground between reinventing the wheel and adding unnecessary bulk to the application. <br>
I believe I have succeeded in using frameworks and libraries only where it best benefits the application and/or build process, and in writing my own code where it is pragmatic to do so.
The debouncer tool represents a further middleground; I avoid calling in an entire library for the sake of a single function, rather simply include the function on it's own. 

As it stands, the project was completed in 22 hours. Given more time I would implement a feature which would allow users to add indicators to the chart, such as a ten day moving average line. 

## The Framework:
I decided to use React as the intended level of DOM manipulation would be comparitively unwieldy to pull off with a more low-level setup, such as Jquery with Handlebars. <br>
With React I can avoid having to manually traverse the DOM tree, and instead simply declare how the component should look. This greatly improves readablility and maintainability.
Another significant benefit is that using React opens up the possibility of bringing in powerful tools from the React ecosystem, such as Recharts.<br>
The Virtual DOM offers performance benefits, by only changing nodes that need to be changed, but those benefits are marginal in an app of this size.

## The React toolchain:
The create-react-app toolchain provides a convenient develoment environment, automating both the compiling and build processes and providing a great deal of boilerplate<br>
I have manually handled a webpack/babel toolchain for React before, but it adds a layer of complexity to the build process with no discernable benefit here. 
In the past, for example, I have wasted time debugging a build only to find out that babel needed me to manually add support for the spread operator. 

### The chart library:
I needed to use a library for the stock chart so I brought in Recharts. <br>
This library is built to synergise with React, and has better documentation than the alternative; Victoryjs. 

### Additional Basic Security Features
Helmetjs to provides some basic security features to augment the use of the backend framework Expressjs.<br>
X Frame Options has been set to deny, so that the webpage cannot be put into an iframe, helping prevent clickjacking attacks. Can be set to "allow" or "sameorigin". <br>
The Strict-Transport-Security header has been set to keep users on HTTPS, will not force users to switch to HTTPS. Forcing HTTPS prevents the server running locally. Will pursue if I set up my own url/SSL <br>
The app will also not sniff MIME types in order to prevent an attack whereby content types are faked in order to trick the browser into executing a malicious script <br>
For a full list of the default features, see https://github.com/helmetjs/helmet


<br>
<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Replaced default "react-scripts start" with "node server.js" <br>
react-scripts start runs the app in development mode at port 3000, reloads on save, logs lint errors to the console <br>
node server.js runs the app's backend, local port 8080, "/test" route for ping test returns "Confirmed", "/" serves the app itself.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Built With

* [React](https://reactjs.org/) - The web framework used
* [Create-React-App](https://github.com/facebook/create-react-app) - The Toolchain
* [Recharts](http://recharts.org/) - To provide the stock chart
* [Express](https://expressjs.com/) - The backend framework used