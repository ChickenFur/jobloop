Meteor.autosubscribe(function (){
  Meteor.subscribe("user-data", Meteor.userId())  
})


//set the tab-pane class to "active" when its contents display

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
    return JobLoopUsers.findOne().Applications;
    };
};


//this is the template logic for the front page.
//paste it under row-fluid appRow.
// {{> calltoAction}}
//           {{#if currentUser}}
//             {{> topbar}}
//             <div class="appHeading">
//             <h4>Open Applications</h4>
//           </div>
//             {{> applications}}
//           {{/if}}

// <h4>Job Company Lala - Job Title 2</h4>
//     <div class="applicationNotes">
//       <p>This is where the application notes will go.</p>
//       </div>



