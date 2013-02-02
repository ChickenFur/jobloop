Meteor.methods({
  addUser : function(){
    //todo write add user function
    console.log("user added")
  },  
  getCompanyNames : function (){
    console.log("Getting Company Names")
  },
  fillDBWithTestData : function(userId) {
    TestFunctions.insertTestData(this.userId)
    console.log(JobLoopUsers.find().fetch()[0])
  },
  deleteDB : function(){
    JobLoopUsers.remove({});
    console.log("Number of users: ",JobLoopUsers.find().count())
  }
});
