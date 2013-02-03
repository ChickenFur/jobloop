Template.account.username = function(){
  return Meteor.user().profile.name;
};

Template.account.resume = function(){
  var user = JobLoopUsers.findOne();
  return user.resume;
};

Template.account.events({
  'click .upload-resume': function(evt){
    filepicker.pick({
      //mimetypes: ['text/plain'],
       extensions: ['.doc*', '.DOC*','.pdf', '.PDF'],
      container: 'modal',
      services:['COMPUTER', 'GMAIL', 'BOX', 'DROPBOX', 'FTP', 'GOOGLE_DRIVE', 'GITHUB', 'URL']
      },
      function(FPFile){
        // console.log(JSON.stringify(FPFile));
        var url = FPFile.url;
        var filename = FPFile.filename;
        JobLoopUsers.update(
          { meteorUserId: this.userId },
          { $set: { 'resume': url } }
        );
        // console.log(url, Session.get('resume') );
      },
      function(FPError){
        console.log(FPError.toString());
      }
    );
  }
});
