DnB = {
  get_data_async : function (query, callback){
    var results = Meteor.call("getCompanyData", query)

  }
}
var updateApplicationName = function (appId, newName){
  var userData = JobLoopUsers.findOne();
      userData.Applications.forEach(function(value, key){
        if(value.appID === appId){
          value.company = newName;
          return;
        }
      });
  JobLoopUsers.update( {meteorUserId : this.userId},
                      {$set : {Applications: userData.Applications }})
}

Template.company.events = ({
  "click .editCompany" : function (event, template){
   
    var currentName = template.find('.companyNameLabel')
    var currentNameVal = currentName.textContent;
    var inputTag = "<input class='companyNameInput' value='"+  
                    currentNameVal + "'></input>"
    var parent = currentName.parentElement;
    $(currentName).addClass("hiddenItem");
    $(parent).append(inputTag);
    var editButton = template.find('.editCompany');
    $(editButton).addClass("hiddenItem");
    var saveButton = template.find('.saveCompany');
    $(saveButton).removeClass("hiddenItem");
    $(template.find('.companyNameInput') ).typeahead({source : DnB.get_data_async})

  },
  "click .saveCompany" : function (event, template){
    var saveButton = template.find('.saveCompany');
    $(saveButton).addClass("hiddenItem");

    var editButton = template.find('.editCompany');
    $(editButton).removeClass("hiddenItem");

    var currentAppId = $(template.find(".appIdLabel"))
    debugger;
    updateApplicationName(currentAppId, $(template.find('.companyNameInput')).val())
    var currentName = template.find('.companyNameLabel'); 
    $(currentName).contentText = $(template.find('.companyNameInput')).val()
    $(currentName).removeClass("hiddenItem");
    $(template.find('.companyNameInput')).remove();

  }



})