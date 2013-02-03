Meteor.publish("user-data", function(userId){
  return JobLoopUsers.find({meteorUserId: userId});
});

JobLoopUsers.allow({
  update: function(userId){
    return userId === userId;
  }
});

Meteor.methods({
  addUser : function(){
    //todo write add user function
    console.log("user added");
  },
  getCompanyNames : function (){
    console.log("Getting Company Names");
  },
  fillDBWithTestData : function(userId) {
    console.log("fillDBWithTestData was called.");
    TestFunctions.insertTestData(userId);
    console.log(JobLoopUsers.find().fetch()[0]);
  },
  deleteDB : function(){
    console.log("deleteDB was called.");
    JobLoopUsers.remove({});
    console.log("Number of users: ",JobLoopUsers.find().count());
  }
});
