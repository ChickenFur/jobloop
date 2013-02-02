Tasks = new Meteor.Collection('tasks');
Stats = new Meteor.Collection('stats');

Meteor.startup(function () {
	Tasks.remove({});
	Stats.remove({});

    if (Tasks.find().count() === 0) {
      var tasks = [ 'Call Maria from Google.',
					'Follow up on ZenDesk interview.',
					'Meet Joel for mentor coffee.',
					'Prep for interview at Meteor.',
					'JS Meetup Wednesday'
					];
      for (var i = 0; i < tasks.length; i++){
        Tasks.insert({task: tasks[i]});
      }
    }

    if (Stats.find().count() === 0) {
      var stats = [ 'Applications submitted',
                   'Interviews completed',
                   'Interviews scheduled',
                   'Follow-ups sent',
                   'Offers received'
                   ];
      for (var i = 0; i < stats.length; i++){
        Stats.insert({stat: stats[i], total: Math.floor(Math.random()*10)*5});
      }
    }

});

