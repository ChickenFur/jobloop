var updateApplicationName = function (appId, newName){
  var userData = JobLoopUsers.findOne();
      userData.Applications.forEach(function(value, key){
        if(value.appID.toString() === appId){

          value.company = newName;
          return;
        }
      });
  JobLoopUsers.update( {meteorUserId : this.userId},
    {$set : {Applications: userData.Applications }})
}
var updateCompanyData = function (companyData, appId){

  var userData = JobLoopUsers.findOne();
      userData.Applications.forEach(function(value, key){
        if(value.appID.toString() === appId){
          value.companyData = companyData;
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
    var inputTag = "<label class='companyNameInputLabel'>Company Name:</label><input class='companyNameInput'></input>"
    var parent = currentName.parentElement;
    $(currentName).addClass("hiddenItem");
    $(parent).append(inputTag);
    var editButton = template.find('.editCompany');
    $(editButton).addClass("hiddenItem");
    var saveButton = template.find('.saveCompany');
    $(saveButton).removeClass("hiddenItem");
    //$(template.find('.companyNameInput') ).typeahead({source : DnB.get_data_async})

  },
  "keyup .companyNameInput" : function (event, template){
    
    if(event.keyCode === 13){
      $(template.find(".saveCompany")).click()
    }
  },
  "click .saveCompany" : function (event, template){
    var saveButton = template.find('.saveCompany');
    $(saveButton).addClass("hiddenItem");
    var editButton = template.find('.editCompany');
    $(editButton).removeClass("hiddenItem");
    var currentAppId = $(template.find(".appIdLabel")).text();
    var newName = $(template.find('.companyNameInput')).val();
    updateApplicationName(currentAppId, newName);
    var currentName = template.find('.companyNameLabel'); 
    $(currentName).contentText = newName;
    $(currentName).removeClass("hiddenItem");
    $(template.find('.companyNameInput')).remove();
    $(template.find('.companyNameInputLabel')).remove();
    

    Meteor.call("getCompanyNames", newName, function(error, results){
        var resultObject = JSON.parse(results);
        var dunNumber = resultObject.resultSet.hit[0].companyResults.duns;
      Meteor.call("getCompanyData", dunNumber, function(error, results){
        var resultObject = JSON.parse(results);
        
        var companyData = {
          url : resultObject.primaryURLs.primaryUrl[0].url,
          address : resultObject.locations.location[0].address1 + " "
                    + resultObject.locations.location[0].city + " "
                    + resultObject.locations.location[0].state + " "
                    +resultObject.locations.location[0].zip,
          duns : dunNumber,
          // employeeNum : resultObject.
          yearFounded : resultObject.yearFounded,
          name : resultObject.name,
          income : resultObject.keyFinancials.incomeAssets.netIncome,
          assets : resultObject.keyFinancials.incomeAssets.assets,
          phone : resultObject.phones.phoneNumber[0].areaCode +
                  "-"+ resultObject.phones.phoneNumber[0].phoneNumber
        }
        updateCompanyData(companyData, currentAppId);
      });
    });
  }

});