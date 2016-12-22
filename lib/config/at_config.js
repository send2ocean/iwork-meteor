// Options
AccountsTemplates.configure({
    defaultLayout: 'masterLayout',
    defaultLayoutRegions: {
        nav: 'nav',
        footer: 'footer',
    },
    defaultContentRegion: 'main',
    showForgotPasswordLink: false,
    overrideLoginErrors: true,
    enablePasswordChange: true,

    // sendVerificationEmail: true,
    // enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: true,
    //formValidationFeedback: true,
    homeRoutePath: '/home',
    showAddRemoveServices: false,
    showPlaceholders: true,

    negativeValidation: true,
    positiveValidation: true,
    negativeFeedback: false,
    positiveFeedback: true,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
});
let pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([{
        _id: "username",
        type: "text",
        displayName: "UserName",
        required: true,
        minLength: 5,
    }, {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    }, {
        _id: 'phone',
        type: 'tel',
        displayName: "Landline Number",
    },
    pwd
]);

var mySubmitFunc = function(error, state) {
    if (!error) {
        if (state === "signIn") {
            // Successfully logged in
            console.log('Successfully logged in')
            FlowRouter.redirect('/admin');
        }
        if (state === "signUp") {
            // Successfully registered
            // ...
        }
    }
};
var myPostLogout = function() {
    //example redirect after logout
    FlowRouter.go('/home');
};

AccountsTemplates.configure({
    onLogoutHook: myPostLogout
});

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});
