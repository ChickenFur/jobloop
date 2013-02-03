DnB = {
  get_data_async : function (query, callback){
    results = Meteor.call("getCompanyData", query)

  }
}
Template.company.events = ({
  "click .editCompany" : function (event, template){
   
    currentName = template.find('.companyNameLabel')
    currentNameVal = currentName.textContent;
    inputTag = "<input class='companyNameInput' value='"+  
                    currentNameVal + "'></input>"
    parent = currentName.parentElement;
    $(currentName).addClass("hiddenItem");
    $(parent).append(inputTag);
    editButton = template.find('.editCompany');
    $(editButton).addClass("hiddenItem");
    saveButton = template.find('.saveCompany');
    $(saveButton).removeClass("hiddenItem");
    $(template.find('.companyNameInput') ).typeahead({source : DnB.get_data_async})

  },
  "click .saveCompany" : function (event, template){
    saveButton = template.find('.saveCompany');
    $(saveButton).addClass("hiddenItem");

    editButton = template.find('.editCompany');
    $(editButton).removeClass("hiddenItem");

    currentName = template.find('.companyNameLabel')
    $(currentName).contentText = $(template.find('.companyNameInput')).val()
    $(currentName).removeClass("hiddenItem");
    $(template.find('.companyNameInput')).remove();

  }



})