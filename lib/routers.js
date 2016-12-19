import {MainLayout,BlogPost,BlogHome,LogIn} from '/imports/ui/App.jsx'
import { Meteor } from 'meteor/meteor';

FlowRouter.route('/', {
  action() {
    console.log(Meteor.userId())
    if (!Meteor.userId()) {
      ReactLayout.render(LogIn, {content: <BlogHome />});
    }else {
      ReactLayout.render(MainLayout, {content: <BlogHome />});
    }

  }
});
FlowRouter.route('/login', {
  action() {
    ReactLayout.render(LogIn, {content: <BlogHome />});
  }
});

FlowRouter.route('/:postId', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <BlogPost {...params} />});
  }
});
