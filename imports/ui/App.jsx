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
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import Home from './components/menu';
import Home from './components/appBar.js'

const Main = () => (
 <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
   <Home title="My AppBar" />
 </MuiThemeProvider>
);

export default Main;
