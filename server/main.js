Meteor.publish("user-data", function(userId){
  return JobLoopUsers.find({meteorUserId: userId});
});

JobLoopUsers.allow({
  update: function(userId){
    return userId === userId;
  },
  insert: function (){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.methods({
  addUser : function(){
    //todo write add user function
    console.log("user added");
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
    var url = "http://dnbdirect-sandbox.dnb.com/DnBAPI-13/rest/search/company/"+name;
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
    var results = Meteor.http.get(url, options).content
    return results;
  },
  getCompanyData : function (id){
    var url = "http://dnbdirect-sandbox.dnb.com/DnBAPI-13/rest/company/"+id;
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
    var results = Meteor.http.get(url, options).content
    return results;
  }
});
