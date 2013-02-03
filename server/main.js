Meteor.publish("user-data", function(userId){
  return JobLoopUsers.find({meteorUserId: userId})
})

Meteor.methods({
  addUser : function(){
    //todo write add user function
    console.log("user added")
  },  
  getCompanyNames : function (){
    console.log("Getting Company Names")
  },
  fillDBWithTestData : function(userId) {
    TestFunctions.insertTestData(userId)
    console.log(JobLoopUsers.find().fetch()[0])
  },
  deleteDB : function(){
    console.log("deleteDB was called.");
    JobLoopUsers.remove({});
    console.log("Number of users: ",JobLoopUsers.find().count())
  },
  getCompanyNames : function(name){
        console.log("Getting Company Data");
        var url = "http://dnbdirect-sandbox.dnb.com/DnBAPI-13/rest/search/company/"+company;
        var header ={
          'Accept' : 'application/json',
          'Content-type' : 'application/json',
          'API-KEY' : '5p83tw3zsmupe48wdgq5dz8a',
          'username' : 'sandboxAPI',
          'password' : 'DnBD1rect'
          }
        var options={
          headers: header,
          dataType: "jsonp"
        }
        results = Meteor.http.get(url, options).content
        console.log("Results: ", results );
        return results;
      }   
});
