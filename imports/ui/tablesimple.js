
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/task.js';
import AccountItem from './accountItem.jsx'
class AccontTables extends Component {

  renderTasks() {
    return this.props.accounts.map((task) => (
      <AccountItem key={task._id} account={task} />
    ));
  }
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.props.accounts.map((account) =>

            <TableRow key={account._id}>
              <TableRowColumn>{account.username}</TableRowColumn>
              <TableRowColumn>{account.emails[0].address}</TableRowColumn>
              <TableRowColumn>{account.profile.phone}</TableRowColumn>
            </TableRow>
        )}
        </TableBody>
      </Table>

      </MuiThemeProvider>
    );
  }
}
AccontTables.propTypes = {
 accounts: PropTypes.array.isRequired,
};
export default createContainer(() => {
  //Meteor.subscribe('Meteor.users.all');
  return {
    accounts: Meteor.users.find({}).fetch(),
    //accounts:Meteor.subscribe('Meteor.users.all'),
  };
}, AccontTables);
