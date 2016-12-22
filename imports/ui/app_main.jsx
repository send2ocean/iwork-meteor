import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const styles = {
    title: {
        cursor: 'pointer'
    }
};
const Logged = (props) => (
    <IconMenu {...props} iconButtonElement={< IconButton > <MoreVertIcon/> < /IconButton>} targetOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }} anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }}>
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
    </IconMenu>
);

Logged.muiName = 'IconMenu';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleToggled = this.handleToggled.bind(this);
    }

    handleToggled(e) {

        console.log('handleToggled!')
        this.setState({
            open: !this.state.open
        });
    }
    accounts(event) {
        console.log('accounts click')
        FlowRouter.go('/admin/accounts');
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <AppBar title={< span style = {
                        styles.title
                    } > IWork < /span>} onLeftIconButtonTouchTap={this.handleToggled} iconElementLeft={< IconButton > <NavigationMenu/> < /IconButton>} iconElementRight={< Logged />}/>

                    <Drawer width={200} open={this.state.open}>
                        <AppBar title="Menus" onLeftIconButtonTouchTap={this.handleToggled} iconElementLeft={< IconButton > <NavigationClose/> < /IconButton>}/>
                        <Menu onItemTouchTap={this.handleToggled}>

                            <MenuItem primaryText="Accounts" leftIcon={< RemoveRedEye />} onTouchTap={this.accounts}/>

                            <MenuItem primaryText="Roles" leftIcon={< PersonAdd />}/>
                            <MenuItem primaryText="Get Tables" leftIcon={< ContentLink />}/>
                            <Divider/>
                            <MenuItem primaryText="Google Map" leftIcon={< ContentCopy />}/>
                            <MenuItem primaryText="Download" leftIcon={< Download />}/>
                            <Divider/>
                            <MenuItem primaryText="Remove" leftIcon={< Delete />}/>
                        </Menu>
                    </Drawer>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }

}
export default Home;
