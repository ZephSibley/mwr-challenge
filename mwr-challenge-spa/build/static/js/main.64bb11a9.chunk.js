(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(262)},125:function(e,t,a){},127:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(55),o=a.n(c),i=(a(125),a(33)),l=a(34),s=a(39),u=a(35),h=a(40);a(127);var m=function(e,t){return new Promise(function(a,n){fetch("https://www.alphavantage.co/query?function="+e+t+"&apikey=P9ER83W4AI59PDKB").then(function(e){return console.log(e.status),200!==e.status?"Something went wrong with the API":e.json()}).then(function(e){e.Note?n("Sorry, we've hit the API call limit, please refresh and try again in a minute"):e["Error Message"]?n("Please enter a valid name or stock symbol"):a(e)})})};var d=function(e,t,a){var n,r;return function(){var c=this,o=arguments;return clearTimeout(n),n=setTimeout(function(){n=null,a||(r=e.apply(c,o))},t),a&&!n&&(r=e.apply(c,o)),r}};var f=function(e,t){for(var a=Object.keys(e["Time Series (Daily)"]),n=0;n<a.length;n++)t.push(e["Time Series (Daily)"][a[n]]),t[n].date=a[n];return t.reverse(),t},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchResults:null,errorMessage:"",chartData:null,chartDataLoaded:!1,stockSelection:""},a.handleStockSearch=function(e){d(m("SYMBOL_SEARCH&keywords=",e.target.value).then(function(e){a.setState({searchResults:e})}).catch(function(e){a.setState({errorMessage:e})}),15e3)},a.handleStockSelection=function(e){a.setState({stockSelection:e.target.id}),m("TIME_SERIES_DAILY&symbol=",e.target.id).then(function(e){var t=[];f(e,t),a.setState({chartData:t,chartDataLoaded:!0})}).catch(function(e){a.setState({errorMessage:e})})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,a=this.state,n=a.searchResults,c=a.chartData,o=a.chartDataLoaded,i=a.stockSelection,l=a.errorMessage;return n&&(e=n.bestMatches.map(function(e){return r.a.createElement("button",{id:e["1. symbol"],key:e["1. symbol"],onClick:t.handleStockSelection},e["2. name"]," (",e["1. symbol"],")")})),o?this.props.render(c,i):r.a.createElement("div",{className:"search-container"},r.a.createElement("p",null,"Which stock would you like to view? "),r.a.createElement("input",{type:"text",placeholder:"Microsoft",onChange:this.handleStockSearch}),l?r.a.createElement("p",null,l):e)}}]),t}(n.Component),p=a(266),w=a(268),S=a(260),y=a(261),k=a(267),E=a(264),b=a(108),g=a(263),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timeFrameSpecified:!1,newTimeFrame:[]},a.restart=function(){window.location.reload()},a.viewSelection=function(e){if(e.target.value){var t=a.props.chartData.slice(e.target.value);a.setState({timeFrameSpecified:!0,newTimeFrame:t})}else a.setState({timeFrameSpecified:!1})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.timeFrameSpecified,a=e.newTimeFrame,n=this.props,c=n.chartData,o=n.stockSelection;return r.a.createElement("div",{className:"stock-chart-container"},r.a.createElement(p.a,{width:"80%",height:600},r.a.createElement(w.a,{data:t?a:c},r.a.createElement(S.a,{dataKey:"date"}),r.a.createElement(y.a,null),r.a.createElement(k.a,{strokeDasharray:"3 3"}),r.a.createElement(E.a,null),r.a.createElement(b.a,null),r.a.createElement(g.a,{name:o,dataKey:"4. close",type:"monotone",stroke:"#8884d8",activeDot:{r:1}}))),r.a.createElement("div",null,r.a.createElement("button",{value:"",onClick:this.viewSelection},"Full View"),r.a.createElement("button",{value:"-30",onClick:this.viewSelection},"30 Day View"),r.a.createElement("button",{value:"-10",onClick:this.viewSelection},"10 Day View")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.restart},"Start Again")))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{render:function(e,t){return r.a.createElement(j,{chartData:e,stockSelection:t})}})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.64bb11a9.chunk.js.map