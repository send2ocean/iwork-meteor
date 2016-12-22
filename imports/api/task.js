import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Meteor.users.all', function () {

    //console.log(Meteor.users.find())
    //return Meteor.users.find(selector, options);
    return Meteor.users.find();
  });
}
