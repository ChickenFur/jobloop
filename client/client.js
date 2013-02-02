//set the tab-pane class to "active" when its contents display

Template.gradientMenu.helpers({
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

Template.gradientMenu.events({
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
Template.homeHeader.events({
  'click .addData' : function(){
    Meteor.call("fillDBWithTestData");
  },
  'click .deleteData' : function(){
    Meteor.call("deleteDB");
  }
});




