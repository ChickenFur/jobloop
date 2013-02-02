JobLoopUsers = new Meteor.Collection("job-loop-users")

Meteor.publish("user-data", function(){
  JobLoopUsers.findOne({meteorUserId : this.userId})
})

Meteor.methods({
  addUser : function(){
    //todo write add user function
    console.log("user added")
  }


})