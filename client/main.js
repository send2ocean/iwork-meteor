import {
    Template
} from 'meteor/templating';

import './views/adminHome.html'
import HelloWorld from '/imports/ui/app_main.jsx'

Template.AdminHome.helpers({
    UserAvatar() {
        return HelloWorld;
    }
})

console.log('client mani start')
