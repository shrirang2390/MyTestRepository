({
	doInit : function(component, event, helper) {
		component.find('caseCreator').getNewRecord(
            "Case", //Case i.e objectname
            null, //recordTypeId
            false, //skip cache ?
            $A.getCallback(function() {
                var rec = component.get("v.newCase"); //initialize the template
                var error = component.get("v.newCaseError");
                
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    console.log("Record template initialized: " + rec.apiName);
                }
            })
            
            )
	},
    handleSaveCase: function(component, event, helper) {
        if(helper.validateCaseForm(component)) {
            //component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
            component.find("caseCreator").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    // record is saved successfully
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    resultsToast.fire();
                } else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                    console.log('Problem saving contact, error: ' + 
                                 JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state +
                                ', error: ' + JSON.stringify(saveResult.error));
                }
            });
        }
    }
})