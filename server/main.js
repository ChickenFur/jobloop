JobLoopUsers = new Meteor.Collection("job-loop-users")

Meteor.publish("user-data", () ->
  JobLoopUsers.findOne({meteorUserId : this.userId})
)

Meteor.Methods({
  addUser : function(){
    //todo write add user function
    console.log("user added")
  }


})