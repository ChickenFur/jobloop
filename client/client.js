Meteor.autosubscribe(function (){
  Meteor.subscribe("user-data", Meteor.userId());
});

Meteor.startup( function() {
  filepicker.setKey("AjKmJWkLsTMSgLKdyPJbrz");
});

Template.home.events({
  'click .icon-plus-sign': function(){
    //create a new record in the collection.
    var appID = function(){
      var lastID = _.last(JobLoopUsers.find().fetch()[0].Applications);
      return lastID.appID + 1;
    };
    
    var user = JobLoopUsers.findOne();
    console.log(user);
    var newArray = user.Applications;
    console.log(newArray);
    newArray.push({appID: appID()});
    console.log(newArray);

    JobLoopUsers.update({meteorUserId: Meteor.userId()},{$set: {Applications:newArray}});
  }
});

Template.applications.helpers({
  application : function(){
    return "this is an application";
  },

  contact: function(){
    return "contact is here.";
  },

  screens: function(){
    return "screen time";
  },

  interviews: function(){
    return "interviews go here.";
  },

  decisions: function(){
    return "accepted/rejected";
  }
});

Template.applications.events({
  'click .tab-pane': function(){

  }
});

Template.topbar.tasks = function(){
  return Tasks.find({},{task: 1});

  //get the top 5 to-do action items for this user from their data.

};

Template.topbar.stats = function(){
  return Stats.find({},{stat: 1});
}


Template.topbar.events({
  'click .icon-star-empty': function(){
    var target = event.target;
    $('target').removeClass('icon-star-empty');
    //$('target').addClass('.icon-star');
  },

  'click .icon-star': function(){

  }
});
Template.testButtons.events({
  'click .addData' : function(){
    Meteor.call("fillDBWithTestData", Meteor.userId());
  },
  'click .deleteData' : function(){
    Meteor.call("deleteDB");
  }
});

Template.applications.Applications = function(){
  if(JobLoopUsers.findOne()){
    var appsArray = JobLoopUsers.findOne().Applications;
    return appsArray.reverse();
    };
};

// User account page template

Template.account.username = function(){
  return Meteor.user().profile.name;
};

Template.account.events({
  'click .upload-resume': function(evt){
    filepicker.pick({
      extensions: ['.doc*', '.DOC*','.pdf', '.PDF'],
      container: 'window',
      services:['COMPUTER', 'GMAIL', 'BOX', 'DROPBOX', 'FTP', 'GOOGLE_DRIVE', 'GITHUB', 'URL']
      },
      function(FPFile){
        // console.log(JSON.stringify(FPFile));
        var url = FPFile.url;
        var filename = FPFile.filename;
        var user = JobLoopUsers.findOne();
        user.resume = url;
      },
      function(FPError){
        console.log(FPError.toString());
      }
    );
  }
});

