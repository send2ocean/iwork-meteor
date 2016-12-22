import React, { Component, PropTypes } from 'react';
import { TableRow, TableRowColumn} from 'material-ui/Table';

// Task component - represents a single todo item
export default class AccountItem extends Component {
  render() {
    return (

      <TableRow>
        <TableRowColumn>{this.props.account.username}</TableRowColumn>
        <TableRowColumn>{this.props.account.emails[0].address}</TableRowColumn>
        <TableRowColumn>{this.props.account.profile.phone}</TableRowColumn>
      </TableRow>
    );
  }
}

AccountItem.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  account: PropTypes.object.isRequired,
};
