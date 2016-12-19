import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';

injectTapEventPlugin = require("react-tap-event-plugin");
Meteor.startup(() => {
  console.log('start up meteor app')
  injectTapEventPlugin();
  //render(<App />, document.getElementById('render-target'));
});
