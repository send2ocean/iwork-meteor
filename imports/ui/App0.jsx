// import React from 'react';
// const MUI = require('material-ui');
// export default class HelloWorld extends React.Component {
//   render() {
//     return (
//       <h1>Hello World</h1>
//     );
//   }
// }
import React from 'react';

// import Home from './components/menu';
import Home from './components/appBar.js'
import TableSimple from './components/tablesimple.js'
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import NoMatch from './components/nomatch.js'
import GMap from './components/googlemap'


const Main = () => (
 <Router history={browserHistory}>
   <Route path="/" component={Home}>
     <IndexRoute component={GMap} />
     <Route path="/login" component={Home}/>
     <Route path="/table" component={TableSimple}/>
     <Route path="/frm" component={TableSimple}/>
     <Route path="/gmap" component={TableSimple}/>
     <Route path="*" component={NoMatch}/>
   </Route>
 </Router>
);

export default Main;
