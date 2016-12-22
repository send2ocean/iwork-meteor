import {
    mount
} from 'react-mounter'
import Tables from '/imports/ui/tablesimple.js'
var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'app',
    triggersEnter: [function(context, redirect) {
        console.log('running app group triggers');
    }],

});

// handling /admin route
adminRoutes.route('/accounts', {
    action: function() {
        console.log('run into frms')
        mount(Tables, {
            name: 'Arunoda'
        })

    },
    triggersEnter: [function(context, redirect) {
        console.log('running /app/frms trigger');
    }]
});

FlowRouter.route('/admin', {
    name: "admin",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {

            main: "AdminHome",

        });
    }
});
